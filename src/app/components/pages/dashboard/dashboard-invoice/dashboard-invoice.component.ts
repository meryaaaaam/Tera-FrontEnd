import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-invoice',
    templateUrl: './dashboard-invoice.component.html',
    styleUrls: ['./dashboard-invoice.component.scss']
})
export class DashboardInvoiceComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    breadcrumb = [
        {
            title: 'Invoice',
            subTitle: 'Dashboard'
        }
    ]

}