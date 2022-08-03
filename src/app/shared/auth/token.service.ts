import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY =   'auth-token';
const USER_KEY  =   'auth-user';
//const baseUrl   =   "https://terarentals.com/backend/public/api/" ;
const baseUrl = "http://127.0.0.1:8000/api/" ;


@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private issuer = {


   // login:    'https://terarentals.com/backend/public/api/auth/login',
    login:  'http://127.0.0.1:8000/api/auth/login' ,

    //register: 'https://terarentals.com/backend/public/api/auth/register',
    register: 'http://127.0.0.1:8000/api/auth/register' ,
  };
  constructor(private router : Router) {}
  handleData(token: any) {
    localStorage.setItem('auth_token', token);
  }
  getToken() {
    return localStorage.getItem('auth_token');
  }
  // Verify the token
  isValidToken() {
    //const token = this.getToken();
    const token = this.getTokens();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true
          : false;
      }
    } else {
      return false;
    }
  }
  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }
  // User state based on valid token
  isLoggedIn() {
   // return this.isValidToken();
   if (this.getTokens()){return true ;}
   else {return false ;}
  }
  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }


  public getTokens(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }



  signOut() {
    window.sessionStorage.clear();
    this.router.navigateByUrl('/') ;  }



    public saveToken(token: string) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }







}
