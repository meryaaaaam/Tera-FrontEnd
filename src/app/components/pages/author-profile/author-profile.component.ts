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

    blogGrid: number = 1;
    id : any ;
    User : any  ;
    results: any;
    image:any;
    constructor( private route: ActivatedRoute, public token : TokenService , private user : UserService, public vs : VehiculeService,
        private router: Router) { }

    ngOnInit(): void {
        this.id=  this.route.snapshot.paramMap.get('id') ;
        console.log(this.id);
        this.user.get(this.id).subscribe(res => {
            this.User = res;
           console.log(this.User);
          
          },
          (error) => {console.log(error.errors) ;}
          );

          this.vs.getVehiculesByUser(this.id).subscribe(
            (data) => {this.results = data ; console.log(this.results)}
      
          )
          if (this.User.photo)
          {this.image = "http://localhost:8000/storage/image/"+this.User.photo ;  }
          else {this.image = 'assets/img/Logo_e.jpg'};
    }

    
   /* singleListingsBox = [
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings7.jpg'
                }
            ],
            categoryLink: 'single-listings',
            category: 'Restaurant',
            bookmarkLink: 'single-listings',
            location: 'Francisco, USA',
            title: 'The Mad Made Grill',
            price: 'Start From: $121',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user1.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'James',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                }
            ],
            ratingCount: '18'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings4.jpg'
                },
                {
                    img: 'assets/img/listings/listings2.jpg'
                }
            ],
            categoryLink: 'single-listings',
            category: 'Hotel',
            bookmarkLink: 'single-listings',
            location: 'Los Angeles, USA',
            title: 'The Beverly Hills Hotel',
            price: 'Start From: $200',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user2.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Sarah',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bx-star'
                }
            ],
            ratingCount: '10'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings8.jpg'
                }
            ],
            categoryLink: 'single-listings',
            category: 'Shopping',
            bookmarkLink: 'single-listings',
            location: 'Seattle, USA',
            title: 'Blue Water Shopping City',
            price: 'Start From: $500',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user5.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Lina',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                }
            ],
            ratingCount: '55'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings1.jpg'
                }
            ],
            categoryLink: 'single-listings',
            category: 'Restaurant',
            bookmarkLink: 'single-listings',
            location: 'New York, USA',
            title: 'Chipotle Mexican Grill',
            price: 'Start From: $150',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user1.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Taylor',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bx-star'
                },
                {
                    icon: 'bx bx-star'
                }
            ],
            ratingCount: '45'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings3.jpg'
                }
            ],
            categoryLink: 'single-listings',
            category: 'Shopping',
            bookmarkLink: 'single-listings',
            location: 'Bangkok, Thailand',
            title: 'Central Shopping Center',
            price: 'Start From: $110',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user3.jpg',
            openORclose: 'Close Now',
            extraClass: 'status-close',
            authorName: 'James',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star-half'
                }
            ],
            ratingCount: '35'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings5.jpg'
                },
                {
                    img: 'assets/img/listings/listings6.jpg'
                }
            ],
            categoryLink: 'single-listings',
            category: 'Beauty',
            bookmarkLink: 'single-listings',
            location: 'Suwanee, USA',
            title: 'Vesax Beauty Center',
            price: 'Start From: $100',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user4.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Andy',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bx-star'
                },
                {
                    icon: 'bx bx-star'
                }
            ],
            ratingCount: '15'
        }
    ]*/

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