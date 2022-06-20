import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';
import {MessageService} from 'primeng/api';
import { UserService } from 'src/app/shared/user/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ImagesService } from 'src/app/shared/gallery/images.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  URL: string = "assets/img/";
  imagename: string;
  submitted : boolean ;
  isLoggedIn = false;
  isLoginFailed = false;
  //User : User = new User;
  User : any  ;
  Info: User = new User;
   isSignedIn!: boolean;
  roles : any ;
  id : any ;
  userForm : FormGroup ;

  constructor(public authService: AuthService ,
              private tokenStorage: TokenService ,
              private auth: AuthStateService,
              public messageService: MessageService,
              private user : UserService,
              public fb: FormBuilder,
              ) {


  }

  showSuccess( ) {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'profile a été modifier avec succes'});
}

showError(detail) {
  this.messageService.add({severity:'error', summary: 'Error', detail: detail});
}

  ngOnInit(): void {
    if (this.tokenStorage.getTokens() ) {
      this.id = this.tokenStorage.getUser().user.id;
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;*/
       this.authService.GetUser(this.id).subscribe(res => {
        this.User = res;
    this.imagename=this.User.photo;
       // this.Info = this.user.user ;
      //  this.showSuccess();
      },
      (error) => {console.log(error.errors) ; this.isLoggedIn = false;}
      );
    } ;


  }

  breadcrumb = [
    {
        title: 'My Profile',
        subTitle: 'Dashboard'
    }

]
photo(event)
{
  console.log(event);
  this.imagename=event.target.files[0].name;
}

saveChange()
{ this.submitted = true;
  let r ;
  this.id = this.tokenStorage.getUser().user.id;
  let info = this.User ;
  console.log(info);
  //info.date_nais = ''+info.date_nais+'' ;
 this.user.updateAdress(this.id , info).subscribe(
      res => {
        r = res ;
        this.User = r ; console.log(this.User) ;this.showSuccess() ;  window.location.reload(); },
      error => {
        if(error.error.message.indexOf("'Column 'address' cannot be null'") )
        {this.showError("Address required ") ;}

      console.log(error.error.message)}

  )
  this.User.photo=this.imagename;
  this.user.update(this.id , info).subscribe(
    res => {

      r = res ;
      this.User = r;
    },
    error => {
    console.log(error.error.message)}

)
 // this.showSuccess() ;

}


}
