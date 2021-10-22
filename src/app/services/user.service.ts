import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import decode from 'jwt-decode';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private notification: NotificationService
  ) {}

  getUser() {
    const token: any = JSON.parse(localStorage.getItem('jwt') ?? '');
    if (!token?.access_token) return null;
    return decode(token?.access_token);
  }

  logoutUser() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/auth/login']);
    return new Observable<HttpEvent<any>>();
  }
}
