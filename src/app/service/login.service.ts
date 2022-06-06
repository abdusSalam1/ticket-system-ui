import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(user: any) {
    let headersToSend: HttpHeaders = new HttpHeaders();
    headersToSend.set('Content-Type', 'application/json');
    headersToSend.append("Access-Control-Allow-Origin","*");
    return this.http.post<any>(`/api/users/login`, user, {headers: headersToSend})
      .pipe(map(user => {
        return new User(user);
      }));
  }
}