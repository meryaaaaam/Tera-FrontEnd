import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-right-sidebar',
    templateUrl: './blog-right-sidebar.component.html',
    styleUrls: ['./blog-right-sidebar.component.scss']
})
export class BlogRightSidebarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleContent = [
        {
            title: 'Blog Right Sidebar',
            backgroundImage: 'assets/img/page-title/page-title4.jpg'
        }
    ]
    singleBlogPost = [
        {
            mainImg: 'assets/img/blog/blog4.jpg',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            date: 'Aug 7, 2020',
            title: '10 Types of Social Proof and What Makes Them Effective',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog5.jpg',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            date: 'Aug 6, 2020',
            title: 'Tech Products That Make It Easier to Stay Home',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog6.jpg',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'Andy',
            date: 'Aug 5, 2020',
            title: '13 Feel-Good Restaurant Stories from the Pandemic',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog7.jpg',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            date: 'Aug 4, 2020',
            title: '5 Ways to Convert Customers Into Advocates Brand',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog8.jpg',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            date: 'Aug 3, 2020',
            title: 'Vesax Tips To-Go: Getting Started With Analytics',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog9.jpg',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'Andy',
            date: 'Aug 6, 2020',
            title: 'How to Beat the High Cost of Customer Questions',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog10.jpg',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            date: 'Aug 5, 2020',
            title: 'Tech Products That Make It Easier to Stay Home',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog11.jpg',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            date: 'Aug 4, 2020',
            title: 'Necessity May Give Us a Virtual Court System',
            link: 'blog-details'
        },
        {
            mainImg: 'assets/img/blog/blog12.jpg',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'Andy',
            date: 'Aug 3, 2020',
            title: '3 Improvements the COVID-19 Pandemic May Force',
            link: 'blog-details'
        }
    ]

    blogRightSidebar: number = 1;

}