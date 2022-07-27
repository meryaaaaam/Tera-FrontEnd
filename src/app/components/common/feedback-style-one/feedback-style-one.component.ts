import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-one',
    templateUrl: './feedback-style-one.component.html',
    styleUrls: ['./feedback-style-one.component.scss']
})
export class FeedbackStyleOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Avis des utilisateurs',
            paragraph: ' '
        }
    ]
    singleFeedbackBox = [
        {
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'John Smith',
            HostName: 'Emma Smith',
            HostImg: 'assets/img/user5.jpg',
            HostInfo : '852 voyages ',
            authorDesignation: '26/04/2022 1:55 PM',
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
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah Taylor',
            HostName: 'Sam Smith',
            HostImg: 'assets/img/user6.jpg',
            HostInfo : '852 voyages ',
            authorDesignation: '26/04/2022 1:55 PM',
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
            ]
        },
        {
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'Alex Hales',
            HostName: 'Ross Geller',
            HostImg: 'assets/img/user7.jpg',
            HostInfo : '852 voyages ',
            authorDesignation: '26/04/2022 1:55 PM',
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
            ]
        },
        {
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.',
            authorImg: 'assets/img/user4.jpg',
            authorName: 'Andy James',
            HostName: 'Carlas Helos',
            HostImg: 'assets/img/user8.jpg',
            HostInfo : '852 voyages ',
            authorDesignation: '26/04/2022 1:55 PM',
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
                    icon: 'bx bxs-star-half'
                },
                {
                    icon: 'bx bx-star'
                }
            ]
        }
    ]

    customOptions: OwlOptions = {
        loop: true,
        nav: true,
        dots: true,
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
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        },
    }

}
