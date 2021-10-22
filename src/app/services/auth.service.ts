import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import decode from 'jwt-decode';
import { HttpService } from './http.service';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private tokenService: TokenService,
    private router: Router,
    private notification: NotificationService
  ) {}

  login(user: any) {
    this.httpService.post('/sign_in', user).subscribe(
      (res) => {
        // save token
        this.tokenService.saveToken(res);
        // navigate to products
        this.notification.showSuccess('Access', '');
        this.router.navigate(['/products']);
      },
      (err) => {
        this.notification.showWarning('', `${err.error.message || err}`);
      }
    );
  }
}
