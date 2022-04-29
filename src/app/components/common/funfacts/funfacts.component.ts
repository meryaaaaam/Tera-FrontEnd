import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-funfacts',
    templateUrl: './funfacts.component.html',
    styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFunfacts = [
        {
            icon: 'bx bx-bullseye',
            title: 'New Visitors',
            subTitle: '1421'
        },
        {
            icon: 'bx bx-group',
            title: 'Happy Customer',
            subTitle: '9579'
        },
        {
            icon: 'bx bx-shape-polygon',
            title: 'Listings',
            subTitle: '1034'
        },
        {
            icon: 'bx bx-trophy',
            title: 'Awards',
            subTitle: '52'
        }
    ]

}