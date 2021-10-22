import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import decode from 'jwt-decode';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  saveToken(jwt: any) {
    localStorage.setItem('jwt', JSON.stringify(jwt));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('jwt') ?? '');
  }

  refreshToken() {
    return from(
      this.httpService.post('', {
        jwt: this.getToken().access_token,
        refreshToken: this.getToken().refresh_token,
      })
    );
  }

}
