import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-disputes',
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss']
})
export class DisputesComponent implements OnInit {

  public disputes:any;
  public ready:boolean = false;
  public responseMessage: any;
  public user : any ;


  constructor(private userService: UserService,
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
    this.userService.getAllDisputes().subscribe(
      (data:any)=> {this.disputes = data.disputes;
                console.log(this.disputes)} ),
      (error:any) => console.log(error) ;

      this.ready = true;


  }

  public giveBackDeposit() {

    let user = this.tokenService.getUser();

    this.userService.giveBackDeposit(user.user.id).subscribe(
      (data:any)=> {this.responseMessage = data.message;
                    alert(this.responseMessage)} ),
      (error:any) => console.log(error);
  }

  public collectDeposit() {

    let user = this.tokenService.getUser();

    this.userService.collectDeposit(user.user.id).subscribe(
      (data:any)=> {this.responseMessage = data.message;
                    alert(this.responseMessage)} ),
      (error:any) => console.log(error);
  }

}
