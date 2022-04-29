import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-how-it-works-page',
    templateUrl: './how-it-works-page.component.html',
    styleUrls: ['./how-it-works-page.component.scss']
})
export class HowItWorksPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleContent = [
        {
            title: 'How it works',
            backgroundImage: 'assets/img/page-title/page-title5.jpg'
        }
    ]

    timelineContent = [
        {
            number: '1',
            title: 'Submit Listings',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Submit Now',
            buttonLink: '#'
        },
        {
            number: '2',
            title: 'Choose Your Package',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Choose Now',
            buttonLink: '#'
        },
        {
            number: '3',
            title: 'Login to My Account',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Login Now',
            buttonLink: '#'
        },
        {
            number: '4',
            title: 'Submit Listing - Free or Paid',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Choose Now',
            buttonLink: '#'
        },
        {
            number: '5',
            title: 'Admin Approves',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Browse Now',
            buttonLink: '#'
        }
    ]

}