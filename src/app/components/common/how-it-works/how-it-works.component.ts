import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-how-it-works',
    templateUrl: './how-it-works.component.html',
    styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Comment ça marche',
            paragraph: ' '
        }
    ]
    howItWorksBox = [
        {
            icon: 'flaticon-placeholder',
            title: 'selectionner une date',
            paragraph: ' '
        },
        {
            icon: 'flaticon-support-1',
            title: "choisir une voiture",
            paragraph: ' '
        },
        {
            icon: 'flaticon-tick',
            title: 'Réserver',
            paragraph: ' '
        }
    ]

}
