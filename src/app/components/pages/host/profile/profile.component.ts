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
  image: any;
  filedata:any;
  data : any ;

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
      //this.roles = this.tokenStorage.getUser().roles;
       this.user.get(this.id).subscribe(res => {
        this.User = res;
       console.log(this.User);
        if (this.User.photo)
        {this.image = "http://localhost:8000/storage/image/"+this.User.photo ;  }
        else {this.image = 'assets/img/Logo_e.jpg'};

       // console.log(this.User.photo);
    //this.imagename=this.User.photo;

      },
      (error) => {console.log(error.errors) ; this.isLoggedIn = false;}
      );

    }





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
  console.log(this.imagename);
  this.image=event.target.files[0];
  console.log(this.image);

}


fileEvent(e){
  this.filedata = e.target.files[0];
  console.log(this.filedata);
}



updatephoto(id)
{


   const formData =new FormData();
   formData.append("img",this.filedata,this.filedata.name);
   console.log(formData);

    this.user.uploadphoto(id , formData) .subscribe(
      response => {
        let c :any ;
        // console.log(response);
         this.data= response ;
         c=this.data.message ;
         console.log(this.data);
          if(!this.data)
         {this.showError(c) ;}
         else {
          this.showSuccess() ;          }

      },
      error => {
        console.log(error);

      },
      () => {  window.location.reload();}

      );

  }



  saveChange()
{


 this.submitted = true;
  let r ;
  this.id = this.tokenStorage.getUser().user.id;
  let info = this.User ;

  if (this.filedata)
  { this.updatephoto(this.id) ;}

  /* this.user.updateAdress(this.id , info).subscribe(
      res => {
        r = res ;
        this.User = r ; console.log(this.User) ;this.showSuccess() ;  window.location.reload(); },
      error => {
        if(error.error.message.indexOf("'Column 'address' cannot be null'") )
        {this.showError("Address required ") ;}

      console.log(error.error.message) }

  )*/
  //this.User.photo=this.imagename;
  this.user.update(this.id , info).subscribe(
    res => {
      r = res ;
      this.User = r;  console.log(this.User) ; this.showSuccess()
    },
    error => {
    console.log(error.errors) ; this.showError("Vérifier les champs Obligatoires")},
    () => {  window.location.reload();}


)
 // this.showSuccess() ;

}


}
