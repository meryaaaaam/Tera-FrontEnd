import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';
import { SortEvent } from 'primeng/api';
@Component({
  selector: 'app-cashout',
  templateUrl: './cashout.component.html',
  styleUrls: ['./cashout.component.scss']
})
export class CashoutComponent implements OnInit {

  public cashouts:any;
  public ready:boolean = false;
  public loading:boolean = true;
  public responseMessage: any;

  public  img : any = "https://7rentals.com/backend/public/storage/image/" ;


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

 statuses = [
  {label: 'Non vérifié', value: 'unqualified'},
  {label: 'Vérifiée', value: 'qualified'},
  {label: 'New', value: 'new'},
  {label: 'Negotiation', value: 'negotiation'},
  {label: 'Renewal', value: 'renewal'},
  {label: 'Proposal', value: 'proposal'}
];


  public fetchCashoutListing() {

    let user = this.tokenService.getUser();

    this.userService.getAllCashoutDemands().subscribe(
      (data:any)=> {this.cashouts = data.cashoutPayments; this.ready = true; this.loading = false;
                console.log(this.cashouts)} ),
      (error:any) => console.log(error) ;


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


  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
}

}
