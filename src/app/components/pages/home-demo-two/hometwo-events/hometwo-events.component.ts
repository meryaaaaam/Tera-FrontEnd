import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-events',
    templateUrl: './hometwo-events.component.html',
    styleUrls: ['./hometwo-events.component.scss']
})
export class HometwoEventsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Upcoming Events',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.'
        }
    ]
    eventsBox = [
        {
            img: 'assets/img/events/events-big.jpg',
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
        }
    ]

}