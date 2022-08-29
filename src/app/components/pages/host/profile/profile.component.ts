import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Card } from 'src/app/models/card';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';
import {MessageService} from 'primeng/api';
import { UserService } from 'src/app/shared/user/user.service';
import {VehiculeService} from 'src/app/shared/vehicules/vehicule.service';
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


  UserForm              : FormGroup;
  URL                   : string      = "assets/img/";
  imagename             : string;
  submitted             : boolean ;
  isLoggedIn            : boolean     = false;
  isLoginFailed         : boolean    = false;
  password_current      : any;
  passwordForm          : FormGroup;
  new_password          : any;
  new_confirm_password  : any;
  value: number = 0;
  //User : User = new User;
  User : User = new User ;

  Info: User = new User;
  card: Card= new Card;
  isSignedIn!: boolean;
  roles ?: any ;
  userr:any;
  id : any ;
  public formData1 = new FormData();
  public formData2 = new FormData();
  userForm : FormGroup ;
  image: any;
  filedata:any;
  data    : any ;
  Result  : any ;
  userInfo: User = new User ;
  isLoading : boolean = false ;


  constructor(public authService: AuthService ,
              private tokenStorage: TokenService ,
              private auth: AuthStateService,
              public messageService: MessageService,
              public vehicule: VehiculeService,
              private user : UserService,
              public fb: FormBuilder,
              ) {

                this.passwordForm = this.fb.group({
                  password_current: [''],
                  new_password: [''],
                  new_confirm_password: [''],
                });
  }



  breadcrumb = [
    {
        title: 'Espace utilisateur',
        subTitle: 'Mon profile'
    }

]


  ngOnInit(): void {


    if (this.tokenStorage.getTokens() )
    {
      this.id = this.tokenStorage.getUser().user.id;
      this.isLoggedIn = true;
      this.getauthuserinfo();
      //this.roles = this.tokenStorage.getUser().roles;



    }

    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
          this.value = 100;
        //  this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
          clearInterval(interval);
      }
  }, 400);

  }

    async getauthuserinfo()
  {
    let promise = new Promise((resolve,reject)=>{
      setTimeout( ()=> resolve("done!"),3000),
      this.user.get(this.id).subscribe(
                      (res)   => {  this.Result = res;
                                    this.createUserForm() ;
                                    this.image = this.Result.photo?"https://7rentals.com/backend/public/storage/image/"+this.User.photo:"assets/img/Logo_e.jpg";
                               }),
                      (error) => {console.log(error.errors) ; this.isLoggedIn = false;}
                  });
   return await  promise ;


  }

  createUserForm()
  {

    this.User = {
      id : this.Result.id,
      username: this.Result.username,
      firstname: this.Result.firstname,
      lastname: this.Result.lastname,
      email: this.Result.email,
      phone: this.Result.phone,
      date_nais: this.Result.date_nais,
      address  : this.Result.address,
      city  : this.Result.city,
      code  : this.Result.code,
      state  : this.Result.state,
      link  : this.Result.link,
      bio  : this.Result.bio,
      addresse : this.Result.addresse,
      photo : this.Result.photo ,
      }
      this.userInfo = {
        id : this.User.id,
        username: this.User.username,
        firstname: this.User.firstname,
        lastname: this.User.lastname,
        email: this.User.email,
        phone: this.User.phone,
        date_nais: this.User.date_nais,
        address  : this.User.address,
        city  : this.User.city,
        code  : this.User.code,
        state  : this.User.state,
        link  : this.User.link,
        bio  : this.User.bio,
        addresse : this.User.addresse,
        photo : this.User.photo
        }

  ;}







photo1(event)
{
 // console.log(event);
  this.image=event.target.files[0];
 // console.log(this.image);
  this.formData1.append("img",this.image,this.image.name);
 // console.log(this.formData1);
  this.card.Driving_licence_side1=this.image.name;
  this.card.user_id=this.User.id;
 // console.log(this.card);
}

photo2(event)
{
  //console.log(event);
  this.image=event.target.files[0];
  //console.log(this.image);
  this.formData2.append("img",this.image,this.image.name);
 // console.log(this.formData2);
  this.card.Driving_licence_side2=this.image.name;
  //console.log(this.card);
}

fileEvent(e){
  console.log('ok');
  this.filedata = e.target.files[0];
  console.log(this.filedata);
  this.updatephoto(this.id).then(
                                result=>{this.getauthuserinfo().then(
                                                                      result=>{ this.isLoading = false ;}
                                                                    );  }
                                ) ;
}





  cards(x)
  {

    this.vehicule.storeImage(x) .subscribe(response=>{console.log(response);})
  }

  store(data)
      {
        this.user.storeImage(data).subscribe(
          (response)=> {

          console.log(response)}) ,
          (error)=> {this.showError(error.error)}
      }

  updatepermis()
  {
      let i = false ;

    this.user.createcard(this.card).subscribe (
      response  =>  {
        this.store(this.formData1);
        this.store(this.formData2);
        this.data= response ;
        console.log(this.data);
          i = true ;
         },

      error   =>    { console.log(error); i = false ;},
      ()      =>    {  ;
    }

      );


    console.log(this.card);


    }

    reload()
    { window.location.reload();}

    toggleLoading = () => {
      this.isLoading = true;

      //Faking an API call
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    };

   async updatephoto(id)
    {  this.isLoading = true ;
      const formData =new FormData();
      let promise = new Promise((resolve,reject)=>{
                setTimeout( ()=> resolve("done!"),3000),
                                  formData.append("img",this.filedata,this.filedata.name);
                                  console.log(formData);
                                  this.user.uploadphoto(id , formData) .subscribe(
                                      response => {   let c :any ;
                                                      this.data= response ;
                                                      c = this.data.message ;
                                                      console.log(this.data);
                                                      /*if(!this.data)
                                                      {this.showError(c) ;}
                                                      else {
                                                              }*/

                                                   },
                                      error     => { console.log(error);

                                    },

         );
     });
     return await  promise ;



      }


      saveChange()
    {


      this.submitted = true;
      this.isLoading = true;
      let r ;
      this.id = this.tokenStorage.getUser().user.id;
      let info = this.User ;



      this.user.update(this.id , info).subscribe(
        res   => {  r = res ;
                  this.User = r;
                  this.showSuccess("Profile modifée avec succes").then(
                    result => { this.getauthuserinfo().then(
                        result=> { this.isLoading = false;}
                    );  }
                  );
                  },

        error =>  {  console.log(error.errors) ;
                  this.showError("Vérifier les champs Obligatoires")
                  },
    )


    }

change()
{
  let data = {
    password_current:this.password_current,
    new_password:this.new_password,
    new_confirm_password:this.new_confirm_password,
}

let data2=Object.create(data);

this.user.changepasswd(data2).subscribe(
  res => {
console.log(res);
  },
  error => {
  console.log(error.errors) ; }


)



}
change2()
{

    let data = this.passwordForm.value ;
    console.log(data);
    this.user.changepasswd(data).subscribe(
      res => {
    console.log(res);
      },
      error => {
      console.log(error.errors) ; }


    )



}



async showSuccess(detail) {

  let promise = new Promise((resolve,reject)=>{
  setTimeout( ()=> resolve("done!"),3000),
  this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  });
return await  promise ;

}


async showError(detail) {

  let promise = new Promise((resolve,reject)=>{
  setTimeout( ()=> resolve("done!"),3000),
  this.messageService.add({severity:'error', summary: 'Error', detail: detail});
  });
return await  promise ;

}


responseHandler(data:any) {
  // this.token.handleData(data.access_token);

   this.tokenStorage.saveUser(data);
   this.isLoginFailed = false;
   this.isLoggedIn = true;

 }

}
