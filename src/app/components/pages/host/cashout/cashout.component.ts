import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-cashout',
  templateUrl: './cashout.component.html',
  styleUrls: ['./cashout.component.scss']
})
export class CashoutComponent implements OnInit {

  public cashouts:any;
  public ready:boolean = false;
  public responseMessage: any;


  constructor(private userService: UserService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.fetchCashoutListing();

  }

  breadcrumb = [
    {
        title: 'Cashout Demands',
        subTitle: 'Dashboard'
    }
]


  public fetchCashoutListing() {

    let user = this.tokenService.getUser();

    this.userService.getAllCashoutDemands(user.user.id).subscribe(
      (data:any)=> {this.cashouts = data.cashoutPayments;
                console.log(this.cashouts)} ),
      (error:any) => console.log(error) ;

      this.ready = true;
  }

  public validateCashout(cashout_id) {

    let user = this.tokenService.getUser();

    let data = {user_id: user.user.id, cashout_id: cashout_id}

    this.userService.validateCashoutDemands(data).subscribe(
      (data:any)=> {this.responseMessage = data.message;
                    alert(this.responseMessage)} ),
      (error:any) => console.log(error);

      this.fetchCashoutListing();
  }

}
