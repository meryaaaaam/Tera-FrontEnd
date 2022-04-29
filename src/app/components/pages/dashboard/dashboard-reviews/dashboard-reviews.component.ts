import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-reviews',
    templateUrl: './dashboard-reviews.component.html',
    styleUrls: ['./dashboard-reviews.component.scss']
})
export class DashboardReviewsComponent implements OnInit {

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
            listingsName: 'Farmis Hotel',
            detailsLink: 'single-listings',
            date: '20 June 2020',
            text: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
            reviewImage: [
                {
                    img: 'assets/img/gallery/gallery1.jpg'
                },
                {
                    img: 'assets/img/gallery/gallery2.jpg'
                },
                {
                    img: 'assets/img/gallery/gallery3.jpg'
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
            listingsName: 'Shopping Complex',
            detailsLink: 'single-listings',
            date: '19 June 2020',
            text: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
            reviewImage: [
                {
                    img: 'assets/img/gallery/gallery1.jpg'
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
            listingsName: 'Gym Training',
            detailsLink: 'single-listings',
            date: '18 June 2020',
            text: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
            reviewImage: [
                {
                    img: 'assets/img/gallery/gallery3.jpg'
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
            listingsName: 'Gym Training',
            detailsLink: 'single-listings',
            date: '18 June 2020',
            text: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
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
            listingsName: 'Farmis Hotel',
            detailsLink: 'single-listings',
            date: '17 June 2020',
            text: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
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
            listingsName: 'Shopping Complex',
            detailsLink: 'single-listings',
            date: '16 June 2020',
            text: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.",
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