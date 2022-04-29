import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: "Explorez la plus grande plateforme d'autopartage du monde",
            paragraph: ' '
        }
    ]
    singleCategoryBox = [
        {
            icon: 'flaticon-cooking',
            title: 'Tesla',
            numberOfPlaces: '16 Annonces',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-hotel',
            title: 'Jeep',
            numberOfPlaces: '42 Annonces',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-exercise',
            title: 'Subaru',
            numberOfPlaces: '11 Annonces',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-commerce',
            title: 'Porsche',
            numberOfPlaces: '24 Annonces',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-cleansing',
            title: 'BMW',
            numberOfPlaces: '128 Annonces',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-calendar',
            title: 'Mercedes-Benz',
            numberOfPlaces: '12 Annonces',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-heart-1',
            title: 'Nissan',
            numberOfPlaces: '16 Annonces',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-heart-1',
            title: 'Lamborghini',
            numberOfPlaces: '8 Annonces',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-car-insurance',
            title: 'Ford',
            numberOfPlaces: '10 Places',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-attorney',
            title: 'Dodge',
            numberOfPlaces: '25 Places',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-plumber',
            title: 'Chevrolet',
            numberOfPlaces: '5 Places',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-more-1',
            title: 'et plus',
            link: 'grid-listings-left-sidebar'
        }
    ]

}
