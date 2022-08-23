import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    user      : any;
    user_info : any ;
    image     : any ;
    user_profile : any ;
    url : any = "https://7rentals.com/backend/public/storage/image/" ;

    constructor(
      private tokenStorage: TokenService ,
      public router: Router ,
      private auth:  AuthStateService,
      private auths:  AuthService,
      private user_service:  UserService
    ) {
      this.user  =  this.tokenStorage.getUser().user ;
      this.get(this.user.id);  }

  ngOnInit() {
    this.user  =  this.tokenStorage.getUser().user ;



    this.get(this.user.id);

  }

  get(id)
  {

   // this.user_profile="https://i.pinimg.com/564x/7b/0d/38/7b0d384177516db45d6a79703ab7d4ad.jpg" ;

    this.user_service.get(id).subscribe
    (
      data  =>  {this.user_info = data
                 this.user_profile = this.user_info.photo?this.url+this.user_info.photo:"assets/img/Logo_e.jpg";


                },
      error =>  {}


      ) ;
  }
  logout() {
    this.auth.setAuthState(false);
    this.tokenStorage.signOut();
      this.router.navigate(['/']);

  }

}
