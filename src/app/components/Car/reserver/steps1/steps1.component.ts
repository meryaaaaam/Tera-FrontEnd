import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { TicketService } from 'src/app/services/API/TicketService';

@Component({
  selector: 'app-steps1',
  templateUrl: './steps1.component.html',
  styleUrls: ['./steps1.component.scss'],
  providers: [MessageService,TicketService]
})
export class Steps1Component implements OnInit {


  personalInformation: any;
  submitted: boolean = false;
   User : any  ;
  id : any ;
  items: MenuItem[];
  constructor( public ticketService: TicketService , private router: Router) { }

  ngOnInit(): void {


  this.personalInformation = this.ticketService.getTicketInformation().personalInformation;

  }




nextPage() {
  if (this.personalInformation.firstname ) {
      this.ticketService.ticketInformation.personalInformation = this.personalInformation;
      this.router.navigate(['car/rent/step2']);

      return;
  }

  this.submitted = true;
}


}
