import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';
import { TokenService } from 'src/app/shared/auth/token.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MenuItem, MessageService} from 'primeng/api';
import { TicketService } from 'src/app/services/API/TicketService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.scss'],
  providers: [MessageService,TicketService]
})
export class ReserverComponent implements OnInit {

  personalInformation: any;
  submitted: boolean = false;
  VerificationForm: FormGroup;
  User : any  ;
  id : any ;
  items: MenuItem[];

  constructor(private user : UserService, private tokenStorage: TokenService ,  public fb: FormBuilder,
              public ticketService: TicketService , private router: Router)
        {
          this.VerificationForm = this.fb.group({
          adresse: [''],
          numéro: [''],
          // photo: this.uploadedFiles[0] ,
        //  galleries:this.uploadedFiles ,
          user_id: this.tokenStorage.getUser().user.id,
          });
           }

  ngOnInit(): void {
          let r ;
          this.id = this.tokenStorage.getUser().user.id;
          this.user.get(this.id).subscribe(
            res => { console.log(res); r = res ; this.User = r; },
            error => { console.log(error.error.message)}

                                            );

           console.log(this.User);


              this.items = [{
                label: 'Email vérification',
                routerLink: 'step1'
            },
            {
                label: 'Photo de profil',
                routerLink: 'step2'
            },
            {
                label: 'Payment',
                routerLink: 'step3'
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation'
            }
            ];


            this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
                }

                nextPage() {
                  if (this.personalInformation.firstname ) {
                      this.ticketService.ticketInformation.personalInformation = this.personalInformation;
                      this.router.navigate(['steps/seat']);

                      return;
                  }

                  this.submitted = true;
              }

}
