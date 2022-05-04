import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  date : Date ;
  constructor() { }

  ngOnInit(): void {
  }
  page_title = 'BMW iX 2022' ;
  car_description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet " ;




  singleListingsBox = [
    {
        mainImg: [
            {
                img: 'assets/img/cars/2022-bmw-ix1-19_800x0w.jpg'
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
    }
]

galleryOptions: OwlOptions = {
loop: true,
nav: true,
dots: false,
autoplayHoverPause: true,
autoplay: true,
margin: 30,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
responsive: {
  0: {
    items: 1,
  },
  576: {
    items: 2,
  },
  768: {
    items: 2,
  },
  992: {
    items: 2,
  }
}
}
singleImageBox = [
    {
        img: 'assets/img/cars/BMW iX/20201111073318_BMW-iX-2022-1600-01.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX//2022-bmw-ix1-19_800x0w.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY23-iX-Gallery-Exterior-08.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY23-iX-Gallery-Exterior-07.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY23-iX-Gallery-Exterior-04.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY23-iX-Gallery-Interior-15.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY23-Gallery-iX-Exterior-09.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY22-iX-Gallery-17.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY22-iX-Gallery-21.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY22-iX-Gallery-20.jpg'
    },
    {
        img: 'assets/img/cars/BMW iX/BMW-MY22-iX-Gallery-19.jpg'
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



}
