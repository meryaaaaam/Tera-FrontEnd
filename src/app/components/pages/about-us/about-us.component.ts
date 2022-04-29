import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    pageTitleContent = [
        {
            title: 'About Us',
            backgroundImage: 'assets/img/page-title/page-title1.jpg'
        }
    ]
    aboutContent = [
        {
            title: 'How We Were Established',
            subTitle: 'Check video presentation to find out more about us.',
            paragraph: [
                {
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                },
                {
                    text: "Every month they moved their money the old way – which wasted their time and money. So they invented a beautifully simple workaround that became a billion-dollar business."
                }
            ]
        }
    ]
    aboutImage = [
        {
            img: 'assets/img/about-img.jpg',
            videoLink: 'https://www.youtube.com/watch?v=bk7McNUjWgw'
        }
    ]

}