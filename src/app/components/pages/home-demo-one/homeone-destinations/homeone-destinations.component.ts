import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-destinations',
    templateUrl: './homeone-destinations.component.html',
    styleUrls: ['./homeone-destinations.component.scss']
})
export class HomeoneDestinationsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Destinations for Future Trips',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
        }
    ]
    singleDestinationsBigBox = [
        {
            img: 'assets/img/destinations/destinations1.jpg',
            subTitle: 'THAILAND',
            title: 'Bangkok',
            number: '26 Places',
            link: 'grid-listings-left-sidebar'
        }
    ]
    singleDestinationsBox = [
        {
            img: 'assets/img/destinations/destinations2.jpg',
            subTitle: 'UNITED STATES',
            title: 'New York',
            number: '20 Places',
            link: 'grid-listings-left-sidebar'
        },
        {
            img: 'assets/img/destinations/destinations3.jpg',
            subTitle: 'JAPAN',
            title: 'Osaka',
            number: '30 Places',
            link: 'grid-listings-left-sidebar'
        },
        {
            img: 'assets/img/destinations/destinations4.jpg',
            subTitle: 'FRANCE',
            title: 'Paris',
            number: '35 Places',
            link: 'grid-listings-left-sidebar'
        },
        {
            img: 'assets/img/destinations/destinations5.jpg',
            subTitle: 'UNITED KINGDOM',
            title: 'London',
            number: '21 Places',
            link: 'grid-listings-left-sidebar'
        },
        {
            img: 'assets/img/destinations/destinations6.jpg',
            subTitle: 'ABUDABI',
            title: 'Dubai',
            number: '14 Places',
            link: 'grid-listings-left-sidebar'
        },
        {
            img: 'assets/img/destinations/destinations7.jpg',
            subTitle: 'AUSTRALIA',
            title: 'Sydney',
            number: '10 Places',
            link: 'grid-listings-left-sidebar'
        }
    ]

}