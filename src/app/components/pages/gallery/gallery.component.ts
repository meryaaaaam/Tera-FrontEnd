import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    pageTitleContent = [
        {
            title: 'Gallery',
            backgroundImage: 'assets/img/page-title/page-title2.jpg'
        }
    ]

    singleGalleryItem = [
        {
            img: 'assets/img/gallery/gallery1.jpg'
        },
        {
            img: 'assets/img/gallery/gallery2.jpg'
        },
        {
            img: 'assets/img/gallery/gallery3.jpg'
        },
        {
            img: 'assets/img/gallery/gallery4.jpg'
        },
        {
            img: 'assets/img/gallery/gallery5.jpg'
        },
        {
            img: 'assets/img/gallery/gallery6.jpg'
        },
        {
            img: 'assets/img/gallery/gallery7.jpg'
        },
        {
            img: 'assets/img/gallery/gallery8.jpg'
        },
        {
            img: 'assets/img/gallery/gallery9.jpg'
        }
    ]

}