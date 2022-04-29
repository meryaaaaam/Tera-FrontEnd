import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    productsList: number = 1;

    constructor() { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }

    pageTitleContent = [
        {
            title: 'Products List',
            backgroundImage: 'assets/img/page-title/page-title1.jpg'
        }
    ]
    singleProductsBox = [
        {
            img: 'assets/img/products/products-img1.jpg',
            title: 'Note Book Mockup',
            price: '$250',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img2.jpg',
            title: 'Motivational Book Cover',
            price: '$200',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img3.jpg',
            title: 'Book Cover Softcover',
            price: '$200',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img4.jpg',
            title: 'Stop and Take a Second',
            price: '$150',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img5.jpg',
            title: 'Real Life Fairytale',
            price: '$240',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img6.jpg',
            title: 'Running From Me',
            price: '$100',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img2.jpg',
            title: 'Motivational Book Cover',
            price: '$200',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img3.jpg',
            title: 'Book Cover Softcover',
            price: '$200',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img4.jpg',
            title: 'Stop and Take a Second',
            price: '$150',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img5.jpg',
            title: 'Real Life Fairytale',
            price: '$240',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
        },
        {
            img: 'assets/img/products/products-img6.jpg',
            title: 'Running From Me',
            price: '$100',
            addToCartLink: 'cart',
            detailsLink: 'single-products'
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
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }

}