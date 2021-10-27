import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private httpService: HttpService) {}

  saveToken(jwt: any) {
    localStorage.setItem('jwt', JSON.stringify(jwt));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('jwt') ?? `{}`);
  }

  refreshToken(): Observable<any> {
    return this.httpService.post('', {
      jwt: this.getToken().access_token,
      refreshToken: this.getToken().refresh_token,
    });
  }

  removeToken(){
    localStorage.removeItem('jwt');
  }
}
