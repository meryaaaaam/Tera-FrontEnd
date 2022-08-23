import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  isSignedIn!: boolean;
  canSee: boolean = false;
  user  :any;
  role  :any;
  id    :any;
  exist : boolean = true ;
  isAdmin: any;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public userservice: UserService
  ) {}
  ngOnInit() {
    this.id=this.token.getUser().user.id;
    //console.log(this.id);
    this.userservice.get(this.id).subscribe(res => {
      this.user = res;
     // console.log(this.user);
      this.role = this.user.role ;
     // console.log(this.role);
      this.isAdmin= this.role=='Admin';
      this.isAdmin= this.role=='Admin'?true:false;
    //  console.log(this.isAdmin);
    });


  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['/']);
  }
  logout() {
    this.auth.setAuthState(false);
    this.token.signOut();
    this.router.navigate(['/']);
   //window.location.reload();
  }
}
