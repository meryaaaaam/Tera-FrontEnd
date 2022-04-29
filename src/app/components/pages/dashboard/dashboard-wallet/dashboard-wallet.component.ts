import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-wallet',
    templateUrl: './dashboard-wallet.component.html',
    styleUrls: ['./dashboard-wallet.component.scss']
})
export class DashboardWalletComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    breadcrumb = [
        {
            title: 'Wallet',
            subTitle: 'Dashboard'
        }
    ]

}