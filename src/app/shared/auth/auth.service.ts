import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 //import { Password } from 'src/app/models/user/password';
// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}

 const baseUrl = "https://7rentals.com/backend/public/api/" ;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user): Observable<any> {

    return this.http.post(baseUrl+'auth/register', user);
  }
  // Login
  signin(user): Observable<any> {

    return this.http.post<any>(baseUrl+'auth/login', user);
  }
  // Access user profile
  profileUser(): Observable<any> {

    return this.http.get(baseUrl+'auth/user-profile');
  }

  GetUser(id) {
    return this.http.get(baseUrl+'users/'+id );

  }

  Profile(): Observable<any> {
    return this.http.get(baseUrl+'user-profile');

  }

  roles(): Observable<any> {
    return this.http.get(baseUrl+'auth/roles');}

  refresh(): Observable<any> {
      return this.http.get(baseUrl+'auth/refresh');}

  EmailVerification(mail): Observable<any> {
    let tokenInLocal = localStorage.getItem('auth_token');
    let tokenInSession = sessionStorage.getItem('auth-token');
    let data = {email : mail}
    /*if (!tokenInLocal|| ! tokenInSession) {
      console.log('Authorization token not found');
    }
    const httpHeaders = new HttpHeaders({
   //   'Content-Type': 'application/json',
      'Authorization': `bearer ${tokenInLocal}`,
    });*/

    return this.http.post('http://127.0.0.1:8000/api/email/verification-notification', data);}
    //return this.http.get(baseUrl+'auth/email/verification-notification');}

}
