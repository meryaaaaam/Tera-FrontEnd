import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
 //import { MessageService } from 'primeng/api';
import { User } from '../models/user';
import { ApiService } from '../shared/api/api.service';
import { AuthStateService } from '../shared/auth/auth-state.service';
import { AuthService } from '../shared/auth/auth.service';
import { TokenService } from '../shared/auth/token.service';
import { OptionsService } from '../shared/vehicules/options.service';
import { VehiculeService } from '../shared/vehicules/vehicule.service';

export class country {

 name: any;
 code: any;
 flag: any;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [ConfirmationService,MessageService]
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

    displayBasic: boolean;
    displayBasic2: boolean;
    displayCustom: boolean;
    activeIndex: number = 0;
    responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  images: any[];

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
  codephone :  country = new country;selectedcar: any;
  link = "https://7rentals.com/backend/public/storage/image/vehicule/" ;
  submitted: boolean = false ;


  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private authState: AuthStateService,
    private tokenStorage: TokenService ,
    public api: ApiService ,
    public cars: VehiculeService ,
    public optionservice: OptionsService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService

  ) {



  }
  ngOnInit() {
      this.FetchVehicule() ;
    }

    FetchVehicule()
    {
      this.cars.getGallerie(3).subscribe(
        (res)=> {this.selectedcar = res  ;
         console.log(this.selectedcar);
         this.images = this.selectedcar ;

        });
    }

    imageClick(index: number) {
      this.activeIndex = index;
      this.displayCustom = true;
  }

  deleteimage(item: any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.cars.deleteGallerie(item.id).subscribe(
          (res)=> {    this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
          this.FetchVehicule() ;
           console.log(res);
          });

      },
      reject: (type) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
      }
  });

   console.log(item) ;
}

confirm2() {

}
}
