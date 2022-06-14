import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private tokenStorage: TokenService ) { }

  ngOnInit(): void {
  }


  logout() {
    this.tokenStorage.signOut();
   // window.location.reload();
  }

}
