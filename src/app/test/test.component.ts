import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../models/user';
import { AuthStateService } from '../shared/auth/auth-state.service';
import { AuthService } from '../shared/auth/auth.service';
import { TokenService } from '../shared/auth/token.service';

export class country {

 name: any;
 code: any;
 flag: any;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [MessageService]
})
export class TestComponent implements OnInit {
 public  City = [ { name : "France" , code :"+33" , flag : "assets/img/flag/france.png" } ,
                  { name : "Canada" , code :"+1"  , flag : "assets/img/flag/canada.png" }
          ];
  user       : User = new User() ;
  loginForm  : FormGroup;
  errors     :any = null;
  disabled   : boolean = true;
  role       : any ;
  phone_mask : any ;
  value6     : any ;
  countries  : any[];
  selectedCountry: country = new country;



  registerForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  value3: string;
  firstname: FormControl;
  lastname: FormControl;
  username: FormControl;
  phone: FormControl;
  email: FormControl;
  birthdate: FormControl;
  password: FormControl;
  codephone :  country = new country;;
  submitted: boolean = false ;


  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
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
    code_phone: this.codephone,
    password_confirmation: [''],
    role: 'user',
  });}

  createFormControl()
  {
    this.firstname = new FormControl('', Validators.required);
    this.username = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.email = new FormControl('', [ Validators.required,  Validators.pattern("[^ @]*@[^ @]*")  ]);
    this.password = new FormControl('', [ Validators.required, Validators.minLength(8)  ]);
      }
  showSuccess( detail) {
      this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  }

  showError(detail) {
    this.messageService.add({severity:'error', summary: 'Error', detail: detail});
  }

    // Handle response
    responseHandler(data:any) {
      // this.token.handleData(data.access_token);
       this.tokenStorage.saveToken(data.access_token);
       this.tokenStorage.saveUser(data);
       this.isLoginFailed = false;
       this.isLoggedIn = true;
       this.role = this.tokenStorage.getUser().roles;
     }


  login() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
        this.showSuccess('Bienvenue');
        this.authState.setAuthState(true);
        this.router.navigateByUrl('user/profile');

      },
      (error) => {
        this.errors = error.error; console.log(this.errors)
        this.showError('Vérifier les champs saisit - '+ this.errors.message);
      },
      () => {
        this.loginForm.reset();
       // this.router.navigate(['user/profile']);


      }
    );
  }
  signup() {

    this.submitted = true ;
    console.log(this.registerForm.valid) ;

    if(this.registerForm.valid)
   { this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        this.showSuccess('Votre Compte a été créer avec success');
        //this.router.navigate(['/']);

        this.loginForm.value.email = this.registerForm.value.email ;
        this.loginForm.value.password = this.registerForm.value.password ;
        console.log(this.loginForm.value);

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
