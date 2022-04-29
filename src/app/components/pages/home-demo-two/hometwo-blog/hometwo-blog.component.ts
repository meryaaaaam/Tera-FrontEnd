import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-blog',
    templateUrl: './hometwo-blog.component.html',
    styleUrls: ['./hometwo-blog.component.scss']
})
export class HometwoBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Vesax Recent News',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
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
        }
    ]

}