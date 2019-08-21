import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from './models/user.response';
import { environment } from 'src/environments/environment';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiVimpUrl;

  constructor(
    private http: HttpClient) { }

  public login(email, password): Observable<UserResponse> {
    const heroesUrl = this.baseUrl + 'auth/login';
    const obervable = this.http.post<UserResponse>(heroesUrl, {email, password});
    obervable.subscribe(
      (res) => {
        sessionStorage.setItem('token', JSON.stringify(res.token));
      }
    );
    return obervable;
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return token && !helper.isTokenExpired(token);
  }

}
