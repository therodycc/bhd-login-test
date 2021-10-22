import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getData(url: string): Observable<any> {
    return this.httpClient.get(`${environment.backend}${url}`);
  }
  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${environment.backend}${url}`, body);
  }
}
