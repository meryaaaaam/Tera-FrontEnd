import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
  }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }

    public value: Date = new Date(2019, 5, 1, 22);
    public format = 'MM/dd/yyyy HH:mm';

        bannerContent = [
        {
            title: 'Trouvez ce qui vous transporte',
            paragraph: 'Obtenez le meilleur prix ici',
            popularSearchList: [
                {
                    title: 'BMW',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Audi',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Mercedes-Benz',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Tesla',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Toyota',
                    link: 'grid-listings-left-sidebar'
                },
                {
                    title: 'Porsche',
                    link: 'grid-listings-left-sidebar'
                }
            ]
        }
    ];
     bannerImage = [
        {
            img: 'assets/img/cars/banner.png'
        }
    ];

    // Category Select

     singleSelect: any = [];

    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey!: 'name',
        search: true
    };
    options = [
        // Type here your category name
        {
            name: 'BMW',
        },
        {
            name: 'Audi',
        },
        {
            name: 'Volkswagen',
        },
        {
            name: 'Tesla',
        },
        {
            name: 'Jeep',
        },
        {
            name: 'Mercedes-Benz',
        },
        {
            name: 'Toyota',
        }
    ];
     searchChange($event) {
        console.log($event);
    }
     reset() {
        this.resetOption = [];
    }

}
