import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-add-listings',
    templateUrl: './dashboard-add-listings.component.html',
    styleUrls: ['./dashboard-add-listings.component.scss']
})
export class DashboardAddListingsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    breadcrumb = [
        {
            title: 'Add Listings',
            subTitle: 'Dashboard'
        }
    ]

}