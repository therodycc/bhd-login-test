import { Injectable } from '@angular/core';
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
        this.notification.showSuccess('Access', 'Welcome');
        this.router.navigate(['/private/accounts']);
      },
      (err) => {
        this.notification.showWarning('', `${err.error.message || err}`);
      }
    );
  }
}
