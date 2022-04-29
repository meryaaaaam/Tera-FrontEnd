import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-my-profile',
    templateUrl: './dashboard-my-profile.component.html',
    styleUrls: ['./dashboard-my-profile.component.scss']
})
export class DashboardMyProfileComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    breadcrumb = [
        {
            title: 'My Profile',
            subTitle: 'Dashboard'
        }
    ]

}