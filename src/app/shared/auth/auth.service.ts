import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 //import { Password } from 'src/app/models/user/password';
// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // User registration
  register(user): Observable<any> {
    return this.http.post('https://tera3.dev.smartegy.ca/backend/public/api/auth/register', user);
  }
  // Login
  signin(user): Observable<any> {
    return this.http.post<any>('https://tera3.dev.smartegy.ca/backend/public/api/auth/login', user);
  }
  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('https://tera3.dev.smartegy.ca/backend/public/api/user-profile');
  }

  GetUser(id) {
    return this.http.get('https://tera3.dev.smartegy.ca/backend/public/api/users/'+id );
  }

  Profile(): Observable<any> {
    return this.http.get('https://tera3.dev.smartegy.ca/backend/public/api/user-profile');
  }

  roles(): Observable<any> {
    return this.http.get('https://tera3.dev.smartegy.ca/backend/public/api/auth/roles');}

  /*changepassword(password: Password): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/new_pass' , password);
  }
*/
}
