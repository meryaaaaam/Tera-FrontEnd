import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }
    
    pageTitleContent = [
        {
            title: 'Checkout',
            backgroundImage: 'assets/img/page-title/page-title5.jpg'
        }
    ]

    // Country Select
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
        {
            name: "United Arab Emirates",
        },
        {
            name: "China",
        },
        {
            name: "United Kingdom",
        },
        {
            name: "Germany",
        },
        {
            name: "France",
        },
        {
            name: "Japan",
        }
    ];
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }

}