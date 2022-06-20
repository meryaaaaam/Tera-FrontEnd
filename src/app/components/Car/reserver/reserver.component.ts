import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';
import { TokenService } from 'src/app/shared/auth/token.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.scss']
})
export class ReserverComponent implements OnInit {

  constructor(private user : UserService,
              private tokenStorage: TokenService ,
              public fb: FormBuilder,
              ) { 
                this.VerificationForm = this.fb.group({
                adresse: [''],
                numéro: [''],
               // photo: this.uploadedFiles[0] ,
              //  galleries:this.uploadedFiles ,
                user_id: this.tokenStorage.getUser().user.id,
                });
              }
  VerificationForm: FormGroup;
  User : any  ;
  id : any ;

  ngOnInit(): void {
    let r ;
    this.id = this.tokenStorage.getUser().user.id;
    this.user.get(this.id).subscribe(
      res => {
        console.log(res);
        r = res ;
        this.User = r;
      },
      error => {
      console.log(error.error.message)}
  
  )

  console.log(this.User);
  }

  verifier(){

  }

}
