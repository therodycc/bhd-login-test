import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private router: Router, private tokenService: TokenService) {}

  getUser() {
    if (!this.tokenService.getToken()?.access_token) return null;
    return decode(this.tokenService.getToken()?.access_token);
  }

  logoutUser() {
    this.tokenService.removeToken();
    this.router.navigate(['/auth/login']);
    return new Observable<HttpEvent<any>>();
  }
}
