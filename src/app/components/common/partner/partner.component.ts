import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    sectionTitle = [
        {
            title: 'Our Partners',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
        }
    ]
    partnerItem = [
        {
            img: 'assets/img/partner/partner1.png',
            link: '#'
        },
        {
            img: 'assets/img/partner/partner2.png',
            link: '#'
        },
        {
            img: 'assets/img/partner/partner3.png',
            link: '#'
        },
        {
            img: 'assets/img/partner/partner4.png',
            link: '#'
        },
        {
            img: 'assets/img/partner/partner5.png',
            link: '#'
        },
        {
            img: 'assets/img/partner/partner6.png',
            link: '#'
        }
    ]
    customOptions: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 4,
			},
			1200: {
				items: 7,
			}
        },
    }

}