import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-blog',
    templateUrl: './homeone-blog.component.html',
    styleUrls: ['./homeone-blog.component.scss']
})
export class HomeoneBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleBlogPost = [
        {
            mainImg: 'assets/img/blog/blog1.jpg',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            date: 'Aug 7, 2020',
            title: '10 Types of Social Proof and What Makes Them Effective',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog2.jpg',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            date: 'Aug 6, 2020',
            title: 'Tech Products That Make It Easier to Stay Home',
            link: 'blog-details'
        }
    ]
    singleEventsItem = [
        {
            date: 'Thu, Jul 30, 11:30 am - 10:00 pm',
            title: 'International Agriculture and Technology Summit',
            link: 'single-events'
        },
        {
            date: 'Thu, Jul 29, 11:30 am - 10:00 pm',
            title: 'Digital Marketing: Customer Engagement & Social Media',
            link: 'single-events'
        },
        {
            date: 'Thu, Jul 28, 11:30 am - 10:00 pm',
            title: 'Internet of Things Forum Africa Exhibition (IOTFA)',
            link: 'single-events'
        }
    ]

}