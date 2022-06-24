import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  res: any = null ;
  date : Date = new Date();
  value4 : any ;
  constructor() { }

  ngOnInit(): void {
  }

}
