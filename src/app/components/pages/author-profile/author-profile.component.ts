import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TokenService } from 'src/app/shared/auth/token.service';
import { UserService } from 'src/app/shared/user/user.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';

@Component({
    selector: 'app-author-profile',
    templateUrl: './author-profile.component.html',
    styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {

    blogGrid  : number = 1;
    id        : any ;
    User      : any  ;
    results   : any;
    image     :any;
    path      = "https://terarentals.com/backend/public/storage/image/vehicule/" ;
    path2     = "https://terarentals.com/backend/public/storage/image/" ;

    constructor( private route: ActivatedRoute,
                 public token : TokenService ,
                 private user : UserService,
                 public vs : VehiculeService,
                 private router: Router) { }

    ngOnInit(): void {
        this.id=  this.route.snapshot.paramMap.get('id') ;
        console.log(this.id);
        this.user.get(this.id).subscribe(res => {
            this.User = res;
           console.log(this.User);
           if (this.User.photo)
           { this.image = "https://terarentals.com/backend/public/storage/image/"+this.User.photo ;  }
           else {this.image = "assets/img/Logo_e.jpg" };
          },
          (error) => {console.log(error.errors) ;}
          );

          this.vs.getVehiculesByUser(this.id).subscribe(
            (data) => {this.results = data ; console.log(this.results)}

          );



          console.log(this.image) ;
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
