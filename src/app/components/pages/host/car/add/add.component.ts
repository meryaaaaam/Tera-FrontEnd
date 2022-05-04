import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  val: number;
  value : Date ;
  constructor() { }

  ngOnInit(): void {
  }

  breadcrumb = [
    {
        title: 'Howdy, Andy!',
        subTitle: 'Dashboard'
    }


]

}
