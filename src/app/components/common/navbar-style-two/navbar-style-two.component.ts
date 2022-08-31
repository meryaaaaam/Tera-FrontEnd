import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';

export class country {
  name: any;
  code: any;
  flag: any;
 }
@Component({
  selector: 'app-navbar-style-two',
  templateUrl: './navbar-style-two.component.html',
  styleUrls: ['./navbar-style-two.component.scss'],
  providers: [MessageService]
})
export class NavbarStyleTwoComponent implements OnInit {
  public  City = [ { name : "France" , code :"+33" , flag : "assets/img/flag/france.png" } ,
                  { name : "Canada" , code :"+1"  , flag : "assets/img/flag/canada.png" }
                 ];
  user : User = new User() ;
  loginForm: FormGroup;
  errors:any = null;
  disabled: boolean = true;

  registerForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  role : any ;

  firstname: FormControl;
  lastname: FormControl;
  username: FormControl;
  phone: FormControl;
  email: FormControl;
  birthdate: FormControl;
  password: FormControl;
  condition: FormControl;
  submitted: boolean = false ;
  selectedCountry: country = new country;
  s :  Date = new Date();
  e : any ;
  from: any;
  to: any;
  datePipe : DatePipe = new DatePipe('en-GB');
  start : Date = new Date(); end : Date = new Date();
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private tokenStorage: TokenService ,
    public messageService: MessageService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });


  }
  ngOnInit() {
    this.createRegisterForm();
    this.createFormControl();
    this.user  =  this.tokenStorage.getUser().user ;

    if (this.tokenStorage.getTokens() ) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;  }
    else { this.router.navigate(['/']);}

    this.end.setHours(this.start.getHours() + 3);
    this.end.setDate(this.start.getDate() + 1);

    }


    createRegisterForm()
    {
      this.registerForm = this.fb.group({
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      date_nais: this.birthdate,
      password: this.password,
      password_confirmation: [''],
      role: 'user',
      condition : false ,
    });}

    createFormControl()
    {
      this.firstname = new FormControl('', Validators.required);
      this.username = new FormControl('', Validators.required);
      this.lastname = new FormControl('', Validators.required);
      this.email = new FormControl('', [ Validators.required, Validators.email, Validators.pattern("[^ @]*@[^ @]*")  ]);
      this.password = new FormControl('', [ Validators.required, Validators.minLength(8)  ]);
      this.condition = new FormControl('false', [ Validators.requiredTrue  ]);

    }

    showSuccess( detail) {
      this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  }

  showError(detail) {
    this.messageService.add({severity:'error', summary: 'Error', detail: detail});
  }

    // Handle response
   async responseHandler(data:any) {

    let promise = new Promise((resolve,reject)=>{
      setTimeout( ()=> resolve("done!"),3000),
      this.tokenStorage.saveToken(data.access_token);
       this.tokenStorage.saveUser(data);
       this.isLoginFailed = false;
       this.isLoggedIn = true;
       this.role = this.tokenStorage.getUser().roles;
     });
   return await  promise ;
      // this.token.handleData(data.access_token);

     }


  login() {
    const mail = this.loginForm.value.email ;
    let ResultLogin  ;

   /* this.authService.EmailVerification(mail).subscribe(
      data => { console.log(data) ;
               //this.showSuccess(data.message);
               if (data.status == 1)
                  {*/
                    this.authService.signin(this.loginForm.value).subscribe(
                        (result) => {  ResultLogin = result ;
                                       console.log(result);
                                       this.responseHandler(result).then(
                                          result =>  {
                                            this.authState.setAuthState(true);
                                            this.router.navigateByUrl('user/profile');
                                            this.loginForm.reset();

                                                   //this.showSuccess('Bienvenue');
                                                   //this.router.navigateByUrl('user/profile');
                                           });

                                    },
                         (error) => {  this.errors = error.error; console.log(this.errors)
                                       this.showError('Vérifier les champs saisit - '+ this.errors.message);
                                    },  )

                 /* }
                  else  {this.router.navigateByUrl('auth/login');}
            },
      error => console.log(error)   );
*/




  }
  signup() {


    this.submitted = true ;
    console.log(this.registerForm.valid) ;

    if(this.registerForm.valid)
   { this.authService.register(this.registerForm.value).subscribe(
      (result) => {
       // console.log(result);
        this.showSuccess('Votre Compte a été créer avec success');
        //this.router.navigate(['/']);

        this.loginForm.value.email = this.registerForm.value.email ;
        this.loginForm.value.password = this.registerForm.value.password ;
       // console.log(this.loginForm.value);

        this.authService.signin(this.loginForm.value).subscribe(
          (result) => {
            this.responseHandler(result);
            this.registerForm.reset();
            this.showSuccess('Bienvenue');
            this.authState.setAuthState(true);
            this.router.navigateByUrl('user/profile');

          },
          (error) => {
            this.errors = error.error; console.log(this.errors)
            this.showError('Vérifier les champs saisit - '+ this.errors.message);
          })


      },
      (error) => {

        this.errors = error.error; console.log(this.errors) ;
      //  this.showError('Vérifier les champs saisit - '+ this.errors);
      },
    );}
    else
    {
      this.showError('Vérifier les champs obligatoires ');
    }






  }


  reloadPage() {
    window.location.reload();
  }



  logout() {
    this.isLoggedIn = false;
    this.tokenStorage.signOut();
   // this.router.navigate(['/']);

  }

  onchange(event)
  {
    if (event.target.checked) {
      this.disabled=false;
    }
    else{
      this.disabled=true;
    }
  }


}
