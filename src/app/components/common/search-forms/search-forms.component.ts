import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  s :any;
  e : any ;
  constructor(private router: Router , private route: ActivatedRoute) {
       //  this.min = this.minDate.toLocaleString('en-GB', { timeZone: 'UTC' });
      //this.min2 = this.minEndDate.toLocaleString('en-GB', { timeZone: 'UTC' });
      // this.min2 = this.datePipe.transform(this.minEndDate, 'dd/MM/yyyy H:m:s');


 }

  ngOnInit(): void {



    this.route.queryParams.subscribe(params => {
      this.s = params['st'];
       this.e = params['se'];


      if (this.s && this.e)
      {
        let start ;
        let end ;
                //let end = this.e.toLocaleString('en-GB', { timeZone: 'UTC' }) ;
       // let start = this.s.toLocaleString('en-GB', { timeZone: 'UTC' }) ;

         start = this.datePipe.transform(this.s, 'MM/dd/yyyy H:m:s');
         end = this.datePipe.transform(this.e, 'MM/dd/yyyy H:m:s');
         this.s = new Date (start) ;
         this.e = new Date (end) ;
        console.log(this.s , this.e) ;
      }
      else
      {
        this.minEndDate.setHours(this.start.getHours() + 3);
        this.end = this.minEndDate ;
        console.log(this.end) ;
      };}) ;

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
