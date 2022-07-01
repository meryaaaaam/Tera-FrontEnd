import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-forms',
  templateUrl: './search-forms.component.html',
  styleUrls: ['./search-forms.component.scss']
})
export class SearchFormsComponent implements OnInit {

  start : Date = new Date();
  end : Date = new Date();
  minDate: any;
  minEndDate : Date = new Date();
  min: any ;
  min2 : any ;
  maxDate: Date;
  mytime: Date = new Date();
  datePipe : DatePipe = new DatePipe('en-GB');
  from : any ;
  to : any ;
  constructor(private router: Router ) {
       //  this.min = this.minDate.toLocaleString('en-GB', { timeZone: 'UTC' });
      //this.min2 = this.minEndDate.toLocaleString('en-GB', { timeZone: 'UTC' });
      // this.min2 = this.datePipe.transform(this.minEndDate, 'dd/MM/yyyy H:m:s');


 }

  ngOnInit(): void {



    this.minEndDate.setHours(this.start.getHours() + 3);
    this.end = this.minEndDate ;
    console.log(this.minEndDate) ;



  }

  onselect(date)
{
 // this.startdate = this.start.toLocaleString('en-GB', { timeZone: 'UTC' }) ;
 // let from = this.start.toLocaleString('en-GB', { timeZone: 'UTC' }) ;
  let end = this.end.toLocaleString('en-GB', { timeZone: 'UTC' }) ;
  // this.minEndDate = date.setHours(date.getHours() + 3);

   /*console.log(date , this.end) ;
   console.log( this.minEndDate) ;*/
  /* console.log(date.getMonth()) ;
   console.log(this.end.getDay()) ;*/


  // this.minEndDate.setHours(date.getHours() + 1);
   //this.min2 = this.minEndDate.toLocaleString('en-GB', { timeZone: 'UTC' });

   //this.min2 = this.datePipe.transform(this.minEndDate, 'dd/MM/yyyy H:m:s');

    this.minEndDate.setHours(this.start.getHours() + 1);
    this.end = this.minEndDate ;
    console.log(this.minEndDate) ;

}

onselectend(date)
{
  //console.log(this.start.toLocaleString('en-GB', { timeZone: 'UTC' })) ;
 this.end = date ;
 this.to = date ;

console.log(this.end) ;
}

search()
{
  let from = this.datePipe.transform(this.start, 'dd/MM/yyyy H:m:s');
  let to = this.datePipe.transform(this.end, 'dd/MM/yyyy H:m:s');

   this.router.navigate(['/car/list'],{queryParams : {'st':from , 'se':to }});
  //console.log(this.start , this.end) ;
}


}
