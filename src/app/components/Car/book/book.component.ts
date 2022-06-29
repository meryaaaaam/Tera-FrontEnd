import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  res: any = null ;
  date : Date = new Date();
  value4 : any ;
  totalprice:number = 0;
  price:number;
  isChecked1: boolean=false;
  isChecked2: boolean=false;
  isChecked3: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }



  checkValue(event: any)
  { console.log(event); 
    this.price=event.target.value;
    if (event.target.id==1) {this.isChecked1=event.target.checked;
      if(this.isChecked1){this.totalprice=this.totalprice+this.price;}
    else{this.totalprice=this.totalprice-this.price;}
    }
    if (event.target.id==2) {this.isChecked2=event.target.checked;
      if(this.isChecked2){this.totalprice=this.totalprice+this.price;}
      else{this.totalprice=this.totalprice-this.price;}}
    if (event.target.id==3) {this.isChecked3=event.target.checked;
      if(this.isChecked3){this.totalprice=this.totalprice+this.price;}
      else{this.totalprice=this.totalprice-this.price;}}
    console.log(this.totalprice);
  }

}
