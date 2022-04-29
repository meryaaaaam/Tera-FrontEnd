import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top-place',
    templateUrl: './top-place.component.html',
    styleUrls: ['./top-place.component.scss']
})
export class TopPlaceComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    pageTitleContent = [
        {
            title: 'Destinations',
            backgroundImage: 'assets/img/page-title/page-title5.jpg'
        }
    ]

}