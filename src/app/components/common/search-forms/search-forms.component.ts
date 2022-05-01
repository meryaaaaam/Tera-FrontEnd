import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-forms',
  templateUrl: './search-forms.component.html',
  styleUrls: ['./search-forms.component.scss']
})
export class SearchFormsComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  mytime: Date = new Date();
  constructor() {
   /* this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
*/
this.minDate = new Date();
this.maxDate = new Date();
this.minDate.setDate(this.minDate.getDate() - 0);
this.maxDate.setMonth(this.maxDate.getMonth() + 7);
 }

  ngOnInit(): void {
  }

}
