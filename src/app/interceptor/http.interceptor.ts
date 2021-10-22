import { AuthService } from '../services/auth.service';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';
import { catchError, filter, switchMap, take, finalize } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { UserService } from '../services/user.service';

@Injectable()
export class HttpGlobalInterceptor implements HttpInterceptor {
  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public auth: AuthService, private userService: UserService) {}

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: { Authorization: 'Bearer ' + token },
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next
      .handle(this.addToken(req, `${this.auth.getToken()?.access_token}`))
      .pipe(
        catchError((error) => {
          // verificar que va aqui
          if (req.url.includes('auth/login')) {
            this.userService.logoutUser();
            return Observable.throw(error);
          }

          if (error instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>error).status) {
              case 400:
                return this.handle400Error(error);
              case 401:
                if (req.url.includes('auth/login')) {
                  return observableThrowError(error);
                }
                return this.handle401Error(req, next);
              default:
                return observableThrowError(error);
            }
          } else {
            return observableThrowError(error);
          }
        })
      );
  }

  handle400Error(error: any) {
    if (
      error &&
      error.status === 400 &&
      error.error &&
      error.error.error === 'invalid_grant'
    ) {
      // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
      this.userService.logoutUser();
    }

    return observableThrowError(error);
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next('');

      return this.auth.refreshToken().pipe(
        switchMap((response: any) => {
          if (response) {
            this.tokenSubject.next(response.access_token);
            this.auth.saveToken(response);
            return next.handle(this.addToken(req, response.access_token));
          }

          // If we don't get a new token, we are in trouble so logout.
          // this.spinner.hide();
          return this.userService.logoutUser();
        }),
        catchError((_) => {
          // If there is an exception calling 'refreshToken', bad news so logout.
          // this.spinner.hide();
          return this.logoutUser();
        }),
        finalize(() => {
          this.isRefreshingToken = false;
        })
      );
    } else {
      return this.tokenSubject.pipe(
        filter((token) => token != ''),
        take(1),
        switchMap((token) => {
          return next.handle(this.addToken(req, token));
        })
      );
    }
  }

  logoutUser(): Observable<HttpEvent<any>> {
    this.userService.logoutUser();
    return new Observable<HttpEvent<any>>();
  }
}
