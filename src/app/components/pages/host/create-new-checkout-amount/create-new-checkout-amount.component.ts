import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-create-new-checkout-amount',
  templateUrl: './create-new-checkout-amount.component.html',
  styleUrls: ['./create-new-checkout-amount.component.scss']
})
export class CreateNewCheckoutAmountComponent implements OnInit {

  @Output() emitData = new EventEmitter();
  public createNewCheckoutAmountForm: FormGroup;
  public responseMessage: any;

  constructor(
      private tokenService: TokenService,
      private formBuilder: FormBuilder,
      private usersService: UserService) {
  }

  ngOnInit(): void {
      this.initForm();
  }

  public async save() {
      try {
        const formData: any = this.createNewCheckoutAmountForm.value;

        this.usersService.checkoutAmount(formData).subscribe(
          (data:any)=> {this.responseMessage = data.message;
                   alert(this.responseMessage)} ),
          (error:any) => console.log(error);
          this.checkoutAmountSaved();
      } catch (error) {

      }
  }

  public checkoutAmountSaved() {
      this.emitData.emit({ name: 'checkout-saved' });
  }

  public closeModal() {
      this.emitData.emit({ name: 'close-modal' });
  }

  public close() {
      this.emitData.emit({ name: 'close' });
  }

  private initForm() {

    let user = this.tokenService.getUser();

      this.createNewCheckoutAmountForm = this.formBuilder.group({
          user_id: [user.user.id, [Validators.required]],
          amount: ['', [Validators.required]],
      });
  }

}
