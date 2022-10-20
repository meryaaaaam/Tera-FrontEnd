import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';

@Component({
  selector: 'app-disputes',
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss']
})
export class DisputesComponent implements OnInit {

  public disputes:any;
  public loading:boolean = true;
  public responseMessage: any;
  public user : any ;
  public  img : any = "https://7rentals.com/backend/public/storage/image/" ;


  constructor(private userService: UserService,private reservation: ReservationService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.fetchDisputesListing();

  }

  breadcrumb = [
    {
        title: 'Disputes',
        subTitle: 'Espace utilisateur'
    }
]


  public fetchDisputesListing() {
    this.reservation.getAllDisputes().subscribe(
      (data:any)=> {this.disputes = data.disputes;
                    if(this.disputes)
                    { this.loading=false ;}
                console.log(this.disputes)} ),
      (error:any) => console.log(error) ;

      //this.ready = true;


  }

  public giveBackDeposit(id) {

    let user = this.tokenService.getUser();

    this.userService.giveBackDeposit(id).subscribe(
      (data:any)=> {this.responseMessage = data.message;
                    alert(this.responseMessage) ; this.fetchDisputesListing();} ),
      (error:any) => console.log(error);
  }

  public collectDeposit(id ) {

    let user = this.tokenService.getUser();
    let data = {'reservation_id': id  }
    this.userService.collectDeposit(data).subscribe(
      (data:any)=> {this.responseMessage = data.message;
                    alert(this.responseMessage) ; this.fetchDisputesListing();} ),
      (error:any) => console.log(error);
  }

}
