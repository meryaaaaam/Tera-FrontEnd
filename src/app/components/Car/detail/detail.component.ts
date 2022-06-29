import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TokenService } from 'src/app/shared/auth/token.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  start : Date = new Date();
  end : Date = new Date();
  id : any ;
  res : any ;
  user : any ;
  //start : any ; end : any ;
  startdate : any ; enddate : any  ; dateend : any ;
  constructor(public vs : VehiculeService , private route: ActivatedRoute, public token : TokenService ,
    private router: Router ) { }

  ngOnInit() {

   this.res =  this.get(this.route.snapshot.paramMap.get('id')) ;
    console.log(this.start)

    this.user = this.token.getUser().user.id ;




  }


onselectstart(date)
{
  this.startdate = this.start.toLocaleString('en-GB', { timeZone: 'UTC' }) ;


  console.log(this.start.toLocaleString('en-GB', { timeZone: 'UTC' })) ;
  console.log(this.start ) ;
   //this.start = this.date.toLocaleString('en-GB', { timeZone: 'UTC' }) ; this.start = ''+this.start ;
}

onselectend(date)
{
  this.enddate  = this.end.toLocaleString('en-GB', { timeZone: 'UTC' }) ;

  console.log(this.end.toLocaleString('en-GB', { timeZone: 'UTC' }))
  //this.end = this.date.toLocaleString('en-GB', { timeZone: 'UTC' }) ; this.end = ''+this.end ;

}


  get(id)
  {let x ;
    this.vs.get(id).subscribe(

      (data)=>{
                x=data ;
                this.res= x;
                console.log(x) ; }
    )
  }

  reservation()
  {
    //this.router.navigate(['/car/book?st='+this.start +'se='+this.end+'searchid='+this.res.id]);
    this.router.navigate(['/car/book'],{queryParams : {'st':this.startdate , 'se':this.enddate , 'searchid':this.res.id }});
  }






customOptions: OwlOptions = {
loop: true,
nav: true,
dots: false,
animateOut: 'fadeOut',
animateIn: 'fadeIn',
autoplayHoverPause: true,
autoplay: true,
mouseDrag: false,
items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ]
}



}
