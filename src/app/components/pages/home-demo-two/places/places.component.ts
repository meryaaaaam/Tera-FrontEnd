import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sectionTitle = [
    {
        title: 'Parcourir par lieu',
        paragraph: '   '
    }
]
singleListingsBox = [
    {
        mainImg: [
            {
                img: 'assets/img/places/quebec.jpg'
            }
        ],
        title: 'Québec ',
        detailsLink: 'single-listings',

    },
    {
        mainImg: [
            {
                img: 'assets/img//places/Nouvelle-ecosse.jpg'
            },
            {
                img: 'assets/img/listings/listings2.jpg'
            }
        ],
        categoryLink: 'single-listings',
        category: 'Hotel',
        bookmarkLink: 'single-listings',
        location: 'Los Angeles, USA',
        title: 'Nouvelle-Écosse',
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
        title: 'Ontario',
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
        title: 'Saskatchewan',
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
                img: 'assets/img/places/alberta.jpg'
            }
        ],

        title: 'Alberta',

        detailsLink: 'single-listings',


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
        title: 'Colombie-Britannique',
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
]
bottomButton = [
    {
        text: 'More Listings',
        link: 'grid-listings-left-sidebar'
    }
]
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


customOptions2: OwlOptions = {
  loop: true,
  nav: true,
  dots: true,
 // dots: false,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: false,
  margin: 30,
  items: 4,
      navText: [
          "<i class='flaticon-left-chevron'></i>",
          "<i class='flaticon-right-chevron'></i>"


      ]
  }
}
