import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit {

  Car : any ;
  BMW : any ;
  constructor(private car : ApiService , private router : Router) { }

  ngOnInit(): void {
    this.car.getAll().subscribe(cars=>
      {console.log(cars);
      this.Car = cars ;
      }
      );


      this.car.getAllBMW().subscribe(cars=>
        {console.log(cars);
        this.BMW = cars ;
        }
        );
  }

}
