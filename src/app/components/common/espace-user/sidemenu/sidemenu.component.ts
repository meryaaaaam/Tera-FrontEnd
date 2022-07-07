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
  role:any;
  id:any;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public user: UserService
  ) {}
  ngOnInit() {
    this.id=this.token.getUser().user.id;
    console.log(this.id);
    this.role=this.user.get(this.id);
    console.log(this.role);


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
