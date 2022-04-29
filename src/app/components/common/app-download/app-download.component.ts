import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-download',
    templateUrl: './app-download.component.html',
    styleUrls: ['./app-download.component.scss']
})
export class AppDownloadComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    appDownloadContent = [
        {
            title: 'Download Vesax App',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            btnBox: [
                {
                    img: 'assets/img/play-store.png',
                    text: 'GET IT ON',
                    subText: 'Google Play',
                    link: '#'
                },
                {
                    img: 'assets/img/apple-store.png',
                    text: 'Download on the',
                    subText: 'Apple Store',
                    link: '#'
                }
            ]
        }
    ]
    appDownloadImage = [
        {
            img: 'assets/img/app-download.png'
        }
    ];

}