import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';
 import { TokenService } from 'src/app/shared/auth/token.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit {

  Car : any ;
  cars : any ;
  reult : any[] ;
  BMW : any ;
  gridListings: number = 1;
  id : any ;
  breadcrumb = [
    {
        title: 'Mes Vehicule',
        subTitle: 'Dashboard'
    }
]
  constructor(private car : VehiculeService , private router : Router , public tokenStorage : TokenService) { }

  ngOnInit(): void {


      this.id = this.tokenStorage.getUser().user.id;


    this.car.getVehiculesByUser(this.id).subscribe(
      data=>
      {this.cars = data ;
        console.log(this.cars) ;
       // this.reult = [data] ;

        // console.log(this.reult);



        /*this.cars.forEach(element => {

          this.reult.push(element) ;

          console.log(this.reult) ;


        });*/



      }



      );


     /* this.car.getAllBMW().subscribe(cars=>
        {console.log(cars);
        this.BMW = cars ;
        }
        );*/
  }

}
