import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';


@Component({
  selector: 'app-permis',
  templateUrl: './permis.component.html',
  styleUrls: ['./permis.component.scss']
})
export class PermisComponent implements OnInit {
cards:any;
breadcrumb = [
  {
      title: 'Vérification',
      subTitle: 'Dashboard'
  }
]
  constructor(
    private user : UserService,
  ) { }

  ngOnInit(): void {
    this.user.getcards().subscribe(
      res => {
        this.cards = res; 
        console.log(this.cards);
    
  })

}
ok()
{
  console.log("ok");
}



}
