import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private API_KEY = 'AIzaSyAU0x05v_lvkYr3lj9rY0mwTLBmIfrhq0g';
  private HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    })
  };
  userToken: string;

  constructor(private http: HttpClient) {
  }

  logout() {
  }

  login(user: UserModel) {
    try {
      const authData = {
        email: user.email,
        password: user.password,
        returnSecureToken: true
      };
      return this.http.post(
        `${this.url}signInWithPassword?key=${this.API_KEY}`,
        authData, this.HTTP_OPTIONS
      ).pipe(
        map(resp => {
          this.saveToken(resp['idToken']);
          return resp;
        })
      );
    } catch (err) {
      console.log('Error ' + err);
    }
  }

  newUser(user: UserModel) {
    try {
      const authData = {
        /*email: user.email,
        password: user.password,*/
        ...user,
        returnSecureToken: true
      };
      return this.http.post(
        `${this.url}signUp?key=${this.API_KEY}`,
        authData, this.HTTP_OPTIONS
      ).pipe(
        map(resp => {
          this.saveToken(resp['idToken']);
          return resp;
        })
      );
    } catch (err) {
      console.log('Error ' + err);
    }
  }

  saveToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token') ? this.userToken = localStorage.getItem('token') : '';
  }

}
