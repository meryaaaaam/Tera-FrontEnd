import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-car-make',
  templateUrl: './car-make.component.html',
  styleUrls: ['./car-make.component.scss']
})
export class CarMakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sectionTitle = [
    {
        title: "Trouvez votre voiture de location parfaite",
        paragraph: ' '
    }
]



singleCarMakeBox = [
  {
      img: 'assets/img/cars/jeep.jpg',
      subTitle: 'Jeep',
     // title: 'Jeep',
     // number: '20 Places',
      link: 'car/list'
  },
  {
      img: 'assets/img/cars/tesla.jpg',
      subTitle: 'Tesla',
     // title: 'Osaka',
     // number: '30 Places',
      link: 'car/list'
  },
  {
      img: 'assets/img/cars/sabaru.jpg',
      subTitle: 'Subaru',
     // title: 'Paris',
     // number: '35 Places',
      link: 'car/list'
  },
  /*{
    img: 'assets/img/cars/lamborgini-03.jpg',
    subTitle: 'Lamborghini',
    //  number: '8 Annonces',
      link: 'car/list'
  },*/

  {
      img: 'assets/img/cars/porsche.jpg',
      subTitle: 'Porsche',
     // title: 'London',
     // number: '21 Places',
      link: 'car/list'
  },
  {
    img: 'assets/img/cars/ford-02.jpg',
    subTitle: 'Ford',
     // number: '10 Places',
      link: 'car/list'
  },
  {
      img: 'assets/img/cars/bmw.jpg',
      subTitle: 'BMW',
     // title: 'Dubai',
      //number: '14 Places',
      link: 'car/list'
  },
  {
      img: 'assets/img/cars/mercedes.jpg',
      subTitle: 'Mercedes-Benz',
     // title: 'Sydney',
     // number: '10 Places',
      link: 'car/list'
  },
  {
    img: 'assets/img/cars/nissan-03.jpg',
    subTitle: 'Nissan',
    //number: '16 Annonces',
    link: 'car/list'
},

{
  img: 'assets/img/cars/dodge-02.jpg',
  subTitle: 'Dodge',
   // number: '25 Places',
    link: 'car/list'
},
{
  img: 'assets/img/cars/chevrolt-02.jpg',
  subTitle: 'Chevrolet',
   // number: '5 Places',
    link: 'car/list'
},
{
  img: 'assets/img/cars/Ferrari-02.jpg',
  subTitle: 'Ferrari ',
   // number: '5 Places',
    link: 'car/list'
},
{
  img: 'assets/img/cars/audi.jpg',
  subTitle: 'Audi ',
   // number: '5 Places',
    link: 'car/list'
},
/*{
  img: 'assets/img/destinations/destinations7.jpg',
  subTitle: ' ',
    link: 'car/list'
}*/
]

customOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
         312: {
          items: 2,
      },
      550: {
        items: 3,
             },
          700: {
          items: 4,
             },
        950: {
            items: 5,
        },
        1180: {
          items: 6,
      },



    },
}
}
