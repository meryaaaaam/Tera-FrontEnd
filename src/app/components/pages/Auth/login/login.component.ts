import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { AuthStateService } from 'src/app/shared/auth/auth-state.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/auth/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  focus;
  focus1;
  msgs1;
  isSelected    : boolean    = true ;

  isLoggedIn    : boolean    = false;
  isLoginFailed : boolean    = false;
  role          : any ;
  errors        : any        = null;
  isLoading     : boolean    = false;
  submitted     : boolean    = false;
  loginForm     : FormGroup;
  email         : FormControl;
  password      : FormControl;


  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private tokenStorage: TokenService ,
    public messageService: MessageService,)
    {
       this.loginForm = this.fb.group({   email: [],   password: [], });
    }

  ngOnInit(): void {
    this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Lien de vérification a été envoyé avec success !'},  ];
    this.createFormControl();
  }


    createFormControl()
    {

      this.email = new FormControl('', [ Validators.required, Validators.email, Validators.pattern("[^ @]*@[^ @]*")  ]);
      this.password = new FormControl('', [ Validators.required, Validators.minLength(8)  ]);


    }
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

  toggleLoading = () => {
    this.isLoading = true;

    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  };
  login() {
    this.submitted = true ;
    this.toggleLoading();
    this.authService.signin(this.loginForm.value).subscribe(
                        (result) => {  //console.log(result);
                                       this.responseHandler(result).then(
                                          result =>  {
                                            this.authState.setAuthState(true);
                                            this.router.navigateByUrl('user/profile');
                                            this.loginForm.reset();

                                                   //this.showSuccess('Bienvenue');
                                                   //this.router.navigateByUrl('user/profile');
                                           });

                                    },
                         (error) => {  this.errors = error.error;
                                       //console.log(this.errors)
                                       this.showError('Vérifier les champs saisit - '+ this.errors.message);
                                    },  )

                  }





                  showSuccess( detail) {
                    this.messageService.add({severity:'success', summary: 'Success', detail: detail});
                  }

                    showError(detail) {
                      this.messageService.add({severity:'error', summary: 'Error', detail: detail});
                    }

  }

