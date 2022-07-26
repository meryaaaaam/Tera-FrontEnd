import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';

@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss'],
  providers: [MessageService]
})
export class NavbarStyleOneComponent implements OnInit {
  user : User = new User() ;
  loginForm: FormGroup;
  errors:any = null;

  registerForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  role : any ;
  startdate : any ; enddate : any  ; dateend : any ;
  res : any ;
  s :any;
  e : any;   datePipe : DatePipe = new DatePipe('en-GB');
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private tokenStorage: TokenService ,
    public messageService: MessageService,
    private route: ActivatedRoute

  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });

    this.registerForm = this.fb.group({
      username: [''],
      firstname: [''],
      lastname: [''],
      email: [''],
      phone: [''],
      date_nais: [''],
      password: [''],
      password_confirmation: [''],
      role: 'user',
    });
  }
  ngOnInit() {

    this.user  =  this.tokenStorage.getUser().user ;

    if (this.tokenStorage.getTokens() ) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;  }
    else { this.router.navigate(['/']);}



    this.route.queryParams.subscribe(params => {
      this.res=params['id'];
      console.log(this.res);
      this.s= params['st'];
      console.log(this.s);
    console.log(typeof this.s);
       this.e= params['se'];
       console.log(this.e);
       if (this.s && this.e)
       {
     let start:any ;
    let end:any ;
      start = this.datePipe.transform(this.s, 'MM/dd/yyyy h:m:s');
      console.log(start);
      console.log(typeof start);
      end = this.datePipe.transform(this.e, 'MM/dd/yyyy h:m:s');
        this.startdate = new Date (start) ;
         this.enddate = new Date (end) ;
    }
    }) ;

    }

    showSuccess( detail) {
      this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  }

  showError(detail) {
    this.messageService.add({severity:'error', summary: 'Error', detail: detail});
  }

  login() {
    this.route.queryParams.subscribe(params => {
      this.res=params['id'];
      console.log(this.res);
      this.s= params['st'];
      console.log(this.s);
    console.log(typeof this.s);
       this.e= params['se'];});
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
        this.showSuccess('youre loged in');
        if(this.res)
       { this.router.navigate(['/car/book'],{queryParams : {'st':this.s , 'se':this.e , 'searchid':this.res }});}
        else {window.location.reload();}

      },
      (error) => {
        this.errors = error.error; console.log(this.errors)
        this.showError('Vérifier votre adresse email ou votre mots de passe');
      },
      () => {
       // this.authState.setAuthState(true);
        this.loginForm.reset();
       // this.router.navigate(['user/profile']);
       // this.router.navigateByUrl('car/book');


      }
    );
  }
  signup() {
    this.loginForm.value.email = this.registerForm.value.email ;
    this.loginForm.value.password = this.registerForm.value.password ;
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        this.showSuccess('yre signup');
        this.login() ;
        //this.router.navigate(['/']);
        this.registerForm.reset();

      },
      (error) => {
        this.showError('Vérifier les champs saisit');
        this.errors = error.error; console.log(this.errors) ;
      },

    );
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


  reloadPage() {
    window.location.reload();
  }



  logout() {
    this.isLoggedIn = false;
    this.tokenStorage.signOut();
   // this.router.navigate(['/']);

  }
}
