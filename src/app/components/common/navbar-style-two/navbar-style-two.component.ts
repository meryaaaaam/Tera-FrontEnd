import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';

@Component({
  selector: 'app-navbar-style-two',
  templateUrl: './navbar-style-two.component.html',
  styleUrls: ['./navbar-style-two.component.scss'],
  providers: [MessageService]
})
export class NavbarStyleTwoComponent implements OnInit {
  user : User = new User() ;
  loginForm: FormGroup;
  errors:any = null;

  registerForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  role : any ;


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


    }

    showSuccess( detail) {
      this.messageService.add({severity:'success', summary: 'Success', detail: detail});
  }

  showError(detail) {
    this.messageService.add({severity:'error', summary: 'Error', detail: detail});
  }

  login() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
        this.showSuccess('youre loged in');

      },
      (error) => {
        this.errors = error.error; console.log(this.errors)
        this.showError('Vérifier votre adresse email ou votre mots de passe');
      },
      () => {
       // this.authState.setAuthState(true);
        this.loginForm.reset();
       // this.router.navigate(['user/profile']);
        this.router.navigateByUrl('user/profile');

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
