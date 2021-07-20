import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = 'http://127.0.0.1:3000/';
  private readonly registerUrl = `${this.url}register/`;
  private readonly loginUrl = `${this.url}login/`;

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  public saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public register(user: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }

  public login(user: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }
}
