import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleContent = [
        {
            title: 'Blog Details',
            backgroundImage: 'assets/img/page-title/page-title1.jpg'
        }
    ]

}