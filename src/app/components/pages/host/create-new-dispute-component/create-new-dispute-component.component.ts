import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';


@Component({
  selector: 'app-create-new-dispute-component',
  templateUrl: './create-new-dispute-component.component.html',
  styleUrls: ['./create-new-dispute-component.component.scss']
})
export class CreateNewDisputeComponentComponent implements OnInit {

  @Output() emitData = new EventEmitter();
  public createDisputeForm: FormGroup;
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
        const dispute: any = this.createDisputeForm.value;

        this.usersService.openDispute(dispute).subscribe(
          (data:any)=> {this.responseMessage = data.message;
                   alert(this.responseMessage)} ),
          (error:any) => console.log(error);
          this.disputeSaved();
      } catch (error) {

      }
  }

  public disputeSaved() {
      this.emitData.emit({ name: 'dispute-saved' });
  }

  public closeModal() {
      this.emitData.emit({ name: 'close-modal' });
  }

  public close() {
      this.emitData.emit({ name: 'close' });
  }

  private initForm() {

    let user = this.tokenService.getUser();

      this.createDisputeForm = this.formBuilder.group({
          user_id: [user.user.id, [Validators.required]],
          host_name: ['', [Validators.required]],
          client_name: ['', [Validators.required]],
          description: ['', []],
      });
  }

}
