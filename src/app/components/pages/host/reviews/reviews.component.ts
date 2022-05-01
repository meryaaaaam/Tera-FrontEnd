import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  breadcrumb = [
    {
        title: 'Reviews',
        subTitle: 'Dashboard'
    }
]
visitorReviews = [
    {
        userImage: 'assets/img/user4.jpg',
        userName: 'James Anderson',
        listingsName: 'BMW M2CS 2021',
        detailsLink: 'car/detail',
        date: '20 June 2020',
        text: "The car is great and handles really well. He was communicative and easy to pick up and drop off from. Having an electric car was great, charging was easy. We were able to use the car to drive up to the red woods. It made our trip amazing!",
        reviewImage: [
            {
                img: 'assets/img/cars/BMW M2CS 2021/m2cs (2).jpg'
            },
            {
                img: 'assets/img/cars/BMW M2CS 2021/m2cs (5).jpg'
            },
            {
                img: 'assets/img/cars/BMW M2CS 2021/m2cs (8).jpg'
            }
        ],
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
        ]
    },
    {
        userImage: 'assets/img/user2.jpg',
        userName: 'Sarah Taylor',
        listingsName: 'Ford Mustang GT 2020',
        detailsLink: 'car/detail',
        date: '19 June 2020',
        text: "The car is great and handles really well. He was communicative and easy to pick up and drop off from. Having an electric car was great, charging was easy. We were able to use the car to drive up to the red woods. It made our trip amazing!",
        reviewImage: [
            {
                img: 'assets/img/cars/black ford mangan gt.jpg'
            }
        ],
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
        ]
    },
    {
        userImage: 'assets/img/user3.jpg',
        userName: 'David Warner',
        listingsName: 'Mini Cooper S GP3 Rear 2020',
        detailsLink: 'car/detail',
        date: '18 June 2020',
        text: "The car is great and handles really well. He was communicative and easy to pick up and drop off from. Having an electric car was great, charging was easy. We were able to use the car to drive up to the red woods. It made our trip amazing!",
        reviewImage: [
            {
                img: 'assets/img/cars/Mini-Cooper-S/GP3Rear(1).jpg'
            }
        ],
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
        ]
    }
]
YourReviews = [
    {
        userImage: 'assets/img/user1.jpg',
        userName: 'You',
        listingsName: 'BMW M4 2022',
        detailsLink: 'car/detail',
        date: '18 June 2020',
        text: "The car is great and handles really well. He was communicative and easy to pick up and drop off from. Having an electric car was great, charging was easy. We were able to use the car to drive up to the red woods. It made our trip amazing!",
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
        ]
    },
    {
        userImage: 'assets/img/user1.jpg',
        userName: 'You',
        listingsName: 'BMW M4 2022',
        detailsLink: 'car/detail',
        date: '17 June 2020',
        text: "The car is great and handles really well. He was communicative and easy to pick up and drop off from. Having an electric car was great, charging was easy. We were able to use the car to drive up to the red woods. It made our trip amazing!",
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
        ]
    },
    {
        userImage: 'assets/img/user1.jpg',
        userName: 'You',
        listingsName: 'BMW M2CS 2021 ',
        detailsLink: 'car/detail',
        date: '16 June 2020',
        text: "The car is great and handles really well. He was communicative and easy to pick up and drop off from. Having an electric car was great, charging was easy. We were able to use the car to drive up to the red woods. It made our trip amazing!",
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
        ]
    }
]
}
