import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TokenService } from 'src/app/shared/auth/token.service';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';

@Component({
  selector: 'app-sercurity-deposit',
  templateUrl: './sercurity-deposit.component.html',
  styleUrls: ['./sercurity-deposit.component.scss'],
  providers: [MessageService]
})
export class SercurityDepositComponent implements OnInit {

  secrurityDepositForm: FormGroup;
  data : any ;
  errors:any = null;
  constructor(
    private tokenStorage: TokenService,
    public formBuilder: FormBuilder,
    public reservationService:ReservationService,
    public messageService: MessageService,
  ) {
    this.secrurityDepositForm = this.formBuilder.group({
      order_number:"a2b3c5",
      amount: "500",
      payment_method:"card",
      user_id: this.tokenStorage.getUser().user.id,
      "card":{
        name:"John Doe",
        number:"5100000010001004",
        expiry_month:"02",
        expiry_year:"24",
        cvd:"123",
      }
    });
};

  ngOnInit(): void {
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});


  }
  showSuccess(detail) {
    this.messageService.add({severity:'success', summary: 'Success', detail: detail});
}

showError(detail) {
  this.messageService.add({severity:'error', summary: 'Error', detail: detail});
}
  breadcrumb = [
    {
        title: 'Security Deposit',
        subTitle: 'Espace utilisateur'
    }
];

public create()
{
   this.data = this.secrurityDepositForm.value ;
  const formData = new FormData();

    {this.reservationService.create(this.data).subscribe(
      (res:any)=>
      {
       this.showSuccess(res.message);
      },
      (error) => {
        this.errors = error.error;
        console.log(this.errors) ;
        this.showError(this.errors.message) ;
      },
    );}

}
}
