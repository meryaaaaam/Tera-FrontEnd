import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-forms',
  templateUrl: './search-forms.component.html',
  styleUrls: ['./search-forms.component.scss']
})
export class SearchFormsComponent implements OnInit {

  start : Date = new Date(); end : Date = new Date();
  minDate: any; minEndDate : Date = new Date();
  min: any ; min2 : any ;
  maxDate: Date; mytime: Date = new Date();
  datePipe : DatePipe = new DatePipe('en-GB');
  from : any ; to : any ;
  s :any; e : any ; today: any;

  constructor(private router: Router , private route: ActivatedRoute) { }
   ngOnInit(): void {

    let today = new Date(); this.today= new Date(today);


    this.route.queryParams.subscribe(params => {   this.s= params['st']; this.e= params['se'];

     if (this.s && this.e)
      { let start:any ; let end:any ;
          start = this.datePipe.transform(this.s, 'MM/dd/yyyy h:m:s');
          end = this.datePipe.transform(this.e, 'MM/dd/yyyy h:m:s');
          this.start = new Date (start) ;
          this.end = new Date (end) ;

      }
     else
     {   //  console.log(this.start);
          this.from=this.start;
          this.minEndDate.setHours(this.start.getHours() + 3);
          this.end = this.minEndDate ;
          this.to=this.minEndDate;
          // console.log(this.end) ;
          };}) ;
         // this.search();
  }



  onselect(date)
{

  this.start= date ;
  console.log(date);
  console.log(typeof date);
  this.from = date ;
  this.minEndDate=new Date(this.start);
  //console.log(this.from);
  // this.minEndDate = date.setHours(date.getHours() + 3);

   /*console.log(date , this.end) ;
   console.log( this.minEndDate) ;*/
  /* console.log(date.getMonth()) ;
   console.log(this.end.getDay()) ;*/


  // this.minEndDate.setHours(date.getHours() + 1);
   //this.min2 = this.minEndDate.toLocaleString('en-GB', { timeZone: 'UTC' });

   //this.min2 = this.datePipe.transform(this.minEndDate, 'dd/MM/yyyy H:m:s');

   // this.minEndDate.setHours(this.start.getHours() + 1);
  //  this.end = this.minEndDate ;
  //  console.log(this.minEndDate) ;

}

onselectend(date)
{
  //console.log(this.start.toLocaleString('en-GB', { timeZone: 'UTC' })) ;
 this.end = date ;
// this.to = date ;
console.log(this.end) ;
}

search()
{ //console.log(typeof this.from);
  //console.log(this.from);

 // this.from = this.datePipe.transform(this.start, 'dd/MM/yyyy H:m:s');

 // this.to = this.datePipe.transform(this.end, 'dd/MM/yyyy H:m:s');
  //console.log(this.to);
  //this.start= this.from;
  //this.end=this.to;
   this.router.navigate(['/car/list'],{queryParams : {'st':this.start , 'se':this.end }});
 //  console.log(this.to , this.from) ;
 console.log(this.start , this.end) ;

}



}
