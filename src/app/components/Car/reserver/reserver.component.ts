import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';
import { TokenService } from 'src/app/shared/auth/token.service';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.scss']
})
export class ReserverComponent implements OnInit {

  constructor(private user : UserService,
              private tokenStorage: TokenService ,) { }

  User : any  ;
  id : any ;

  ngOnInit(): void {
    let r ;
    this.id = this.tokenStorage.getUser().user.id;
    this.user.get(this.id).subscribe(
      res => {
        console.log(res);
        r = res ;
        this.User = r;
      },
      error => {
      console.log(error.error.message)}
  
  )

  console.log(this.User);
  }

}
