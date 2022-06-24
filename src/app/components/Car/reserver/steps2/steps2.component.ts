import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { TicketService } from 'src/app/services/API/TicketService';

@Component({
  selector: 'app-steps2',
  templateUrl: './steps2.component.html',
  styleUrls: ['./steps2.component.scss'],
  providers: [MessageService,TicketService]

})
export class Steps2Component implements OnInit {

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

        this.router.navigate(['car/rent/step3']);



    this.submitted = true;
  }
}
