import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
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

    constructor(
      private tokenStorage: TokenService ,
      public router: Router ,
      private auth:  AuthStateService,
      private user_service:  UserService
    ) { }

  ngOnInit() {
    this.user  =  this.tokenStorage.getUser().user ;
    this.image = "assets/img/"+this.user.photo ;
    this.get(this.user.id);
  }

  get(id)
  {
    this.user_service.get(id).subscribe
    (
      data  =>  {this.user_info = data},
      error =>  {}


      ) ;
  }
  logout() {
    this.auth.setAuthState(false);
    this.tokenStorage.signOut();
      this.router.navigate(['/']);

  }

}
