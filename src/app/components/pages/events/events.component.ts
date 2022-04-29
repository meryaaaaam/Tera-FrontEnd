import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    pageTitleContent = [
        {
            title: 'Events',
            backgroundImage: 'assets/img/page-title/page-title1.jpg'
        }
    ]

    eventsBox = [
        {
            img: 'assets/img/events/events-big.jpg',
            title: 'Global Robotics Summit & Festival',
            date: 'Thu, Jul 30, 11:30 am - 10:00 pm',
            link: 'single-events'
        },
        {
            img: 'assets/img/events/events-big2.jpg',
            title: 'Global Robotics Summit & Festival',
            date: 'Thu, Jul 30, 11:30 am - 10:00 pm',
            link: 'single-events'
        }
    ]
    singleEventsBox = [
        {
            img: 'assets/img/events/events1.jpg',
            title: 'Internet of Things Forum Africa Exhibition (IOTFA)',
            date: 'Thu, Jul 30, 11:30 am - 10:00 pm',
            link: 'single-events'
        },
        {
            img: 'assets/img/events/events2.jpg',
            title: 'Digital Marketing: Customer Engagement & Social Media',
            date: 'Wed, Jul 29, 11:30 am - 10:00 pm',
            link: 'single-events'
        },
        {
            img: 'assets/img/events/events3.jpg',
            title: 'International Agriculture and Technology Summit',
            date: 'Tue, Jul 28, 11:30 am - 10:00 pm',
            link: 'single-events'
        },
        {
            img: 'assets/img/events/events4.jpg',
            title: 'Internet of Things Forum Africa Exhibition (IOTFA)',
            date: 'Thu, Jul 30, 11:30 am - 10:00 pm',
            link: 'single-events'
        },
        {
            img: 'assets/img/events/events5.jpg',
            title: 'Digital Marketing: Customer Engagement & Social Media',
            date: 'Wed, Jul 29, 11:30 am - 10:00 pm',
            link: 'single-events'
        },
        {
            img: 'assets/img/events/events6.jpg',
            title: 'International Agriculture and Technology Summit',
            date: 'Tue, Jul 28, 11:30 am - 10:00 pm',
            link: 'single-events'
        }
    ]

}