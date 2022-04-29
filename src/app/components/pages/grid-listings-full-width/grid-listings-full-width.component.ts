import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-grid-listings-full-width',
    templateUrl: './grid-listings-full-width.component.html',
    styleUrls: ['./grid-listings-full-width.component.scss']
})
export class GridListingsFullWidthComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }

    pageTitleContent = [
        {
            title: 'Find Popular Places'
        }
    ]

    // Category Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "name",
        search: true
    };
    options = [
        // Type here your category name
        {
            name: "Restaurants",
        },
        {
            name: "Events",
        },
        {
            name: "Clothing",
        },
        {
            name: "Bank",
        },
        {
            name: "Fitness",
        },
        {
            name: "Bookstore",
        }
    ];
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }
    // Ordering Select
    options2 = [
        {
            name: "Recommended",
        },
        {
            name: "Default",
        },
        {
            name: "Popularity",
        },
        {
            name: "Latest",
        },
        {
            name: "Price: low to high",
        },
        {
            name: "Price: high to low",
        }
    ];
    // Distance Select
    options3 = [
        {
            name: "Driving (5 mi.)",
        },
        {
            name: "Walking (1 mi.)",
        },
        {
            name: "Biking (2 mi.)",
        },
        {
            name: "Within 4 blocks",
        },
        {
            name: "Bicycle (6 mi.)",
        }
    ];

    // All Listings
    singleListingsBox = [
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings1.jpg'
                }
            ],
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            detailsLink: 'single-listings',
            category: 'Restaurant',
            location: 'New York, USA',
            title: 'Chipotle Mexican Grill',
            price: 'Start From: $150',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            openORclose: 'Open Now',
            extraClass: 'status-open',
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
            ratingCount: '45'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings2.jpg'
                },
                {
                    img: 'assets/img/listings/listings4.jpg'
                }
            ],
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            detailsLink: 'single-listings',
            category: 'Hotel',
            location: 'Los Angeles, USA',
            title: 'The Beverly Hills Hotel',
            price: 'Start From: $200',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorImg: 'assets/img/user2.jpg',
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
                    img: 'assets/img/listings/listings3.jpg'
                }
            ],
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            detailsLink: 'single-listings',
            category: 'Shopping',
            location: 'Bangkok, Thailand',
            title: 'Central Shopping Center',
            price: 'Start From: $110',
            openORclose: 'Close Now',
            extraClass: 'status-close',
            authorImg: 'assets/img/user3.jpg',
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
            bookmarkLink: 'single-listings',
            detailsLink: 'single-listings',
            category: 'Beauty',
            location: 'Suwanee, USA',
            title: 'Vesax Beauty Center',
            price: 'Start From: $100',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorImg: 'assets/img/user4.jpg',
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
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings7.jpg'
                }
            ],
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            detailsLink: 'single-listings',
            category: 'Restaurant',
            location: 'Francisco, USA',
            title: 'The Mad Made Grill',
            price: 'Start From: $121',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'James',
            authorImg: 'assets/img/user3.jpg',
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
            bookmarkLink: 'single-listings',
            detailsLink: 'single-listings',
            category: 'Hotel',
            location: 'Los Angeles, USA',
            title: 'The Beverly Hills Hotel',
            price: 'Start From: $200',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorImg: 'assets/img/user2.jpg',
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
                    icon: 'bx bx-star'
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
                    img: 'assets/img/listings/listings13.jpg'
                }
            ],
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            detailsLink: 'single-listings',
            category: 'Fitness',
            location: 'Bangkok, Thailand',
            title: 'Power House Gym',
            price: 'Start From: $110',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorImg: 'assets/img/user3.jpg',
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
                    icon: 'bx bx-star'
                },
                {
                    icon: 'bx bx-star'
                }
            ],
            ratingCount: '35'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings14.jpg'
                },
                {
                    img: 'assets/img/listings/listings15.jpg'
                }
            ],
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            detailsLink: 'single-listings',
            category: 'Beauty',
            location: 'Suwanee, USA',
            title: 'Divine Beauty Parlour & Spa',
            price: 'Start From: $100',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorImg: 'assets/img/user4.jpg',
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

    gridListings: number = 1;

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