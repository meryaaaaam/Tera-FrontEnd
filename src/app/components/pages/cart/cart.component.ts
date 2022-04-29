import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    pageTitleContent = [
        {
            title: 'Cart',
            backgroundImage: 'assets/img/page-title/page-title2.jpg'
        }
    ]

}