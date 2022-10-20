import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';
import { CreateNewCheckoutAmountComponent } from '../create-new-checkout-amount/create-new-checkout-amount.component';

@Component({
  selector: 'app-walet',
  templateUrl: './walet.component.html',
  styleUrls: ['./walet.component.scss']
})
export class WaletComponent implements OnInit {


  public cashout_data:any;
  public client_data:any;
  public transactions : any ;
  public id : any ;
  public ready:boolean = false;
  private bsModalRef: BsModalRef;
  public createNewCheckoutAmountForm: FormGroup;
  public responseMessage: any;
  gridListings: number = 1;
  cashout: number = 1;


  constructor(public reservation :ReservationService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private modalService: BsModalService) { }


    ngOnInit(): void {
      this.initForm();
      this.fetchDashboardAndCheckoutListing();
      this.get_transaction() ;
    }

    breadcrumb = [
      {
          title: 'Wallet',
          subTitle: 'Espace utilisateur'
      }
  ]
  public fetchDashboardAndCheckoutListing() {

    let user = this.tokenService.getUser();

    this.reservation.getDisplayBalance(user.user.id).subscribe(
      (data:any)=> {this.client_data = data.client_data;
                console.log(this.client_data)} ),
      (error:any) => console.log(error);

      this.reservation.get_list_cashout(user.user.id).subscribe(
        (data:any)=> {this.cashout_data = data.cashoutPayments;
                  console.log(this.cashout_data)} ),
        (error:any) => console.log(error);

      this.ready = true;
  }

  public AskForCheckout(){
      this.bsModalRef = this.modalService.show(CreateNewCheckoutAmountComponent, { ignoreBackdropClick: true });
    this.bsModalRef.setClass('modal-lg');
    this.bsModalRef.content.emitData.subscribe((event: GenericEvent) => {
        if (event.name === 'close') {
            this.bsModalRef.hide();
        } else if (event.name === 'close-modal') {
            this.bsModalRef.hide();
        } else if (event.name === 'checkout-saved') {
            this.bsModalRef.hide();
            this.fetchDashboardAndCheckoutListing();
        }
    });

  }

  public save() {
    try {
      const formData: any = this.createNewCheckoutAmountForm.value;

      this.userService.customizeFields(formData).subscribe(
        (data:any)=> {this.responseMessage = data.message;
                 alert(this.responseMessage)} ),
        (error:any) => console.log(error);
    } catch (error) {

    }
  }

  public get_transaction()
  {
    this.id = this.tokenService.getUser().user.id;
    this.reservation.get_transaction(this.id).subscribe(
      (data:any)=> {this.transactions = data.transactions;
                    console.log(this.transactions) ;
              // alert(this.responseMessage)
            }  ),
      (error:any) => console.log(error);
  }

  private initForm() {

      this.createNewCheckoutAmountForm = this.formBuilder.group({
          security_deposit: ['', []],
          client_fee: ['', []],
      });
}

}


export interface GenericEvent {
name: string;
payload?: any;
}
