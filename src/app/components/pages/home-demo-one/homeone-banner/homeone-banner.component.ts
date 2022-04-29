import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }

    mainBannerContent = [
        {
            title: 'Find Nearby',
            paragraph: 'Expolore top-rated attractions, activities and more...',
            popularSearchList: [
                {
                    title: 'Restaurants',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Events',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Clothing',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Bank',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Fitness',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Bookstore',
                    link: 'grid-listings-left-sidebar'
                }
            ]
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

}