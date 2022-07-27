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
            title: 'Pourquoi choisir Tera ?',
            subTitle: 'La solution la plus facile et rapide de location de voiture à Montréal.',
            paragraph: [
                {
                    text: "Aucune condition d'âge"
                },
                {
                    text: "Désinfection totale" },
                    {
                        text: "Annulation gratuite" }
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