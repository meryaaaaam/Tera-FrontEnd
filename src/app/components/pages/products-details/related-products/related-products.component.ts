import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-related-products',
    templateUrl: './related-products.component.html',
    styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Related Products',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
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
        }
    ]

}