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
   this.FetchUsers();

}

FetchUsers()
{
  this.user.getcards().subscribe(
    res => {
      this.cards = res;
      console.log(this.cards);

})
}
Approve(id)
{
  console.log(id);
  let data = {"user_id" : id , "user_status":"Approved"};

  this.user.change_user_status(data).subscribe(
    data => {console.log(data),    this.FetchUsers();}
  )
}

Reject(id)
{
  console.log(id);
  let data = {"user_id" : id , "user_status":"Declined"};

  this.user.change_user_status(data).subscribe(
    data => {console.log(data) ,    this.FetchUsers();}
  )
}


}
