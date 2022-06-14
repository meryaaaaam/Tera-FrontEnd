import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  results ;
  constructor(public vs : VehiculeService) { }
  ngOnInit(): void {
    this.vs.getAll().subscribe(
      (data) => {this.results = data ; console.log(this.results)}

    )




    this.resetOption = [this.options[0]];
}

pageTitleContent = [
    {
        title: 'Find Popular Places'
    }
]

// Category Select
singleSelect: any = [];
multiSelect: any = [];
stringArray: any = [];
objectsArray: any = [];
resetOption: any;

config1 = {
    displayKey: "name",
    search: true ,
    placeholder: 'Trier par'
};

config2 = {
  displayKey: "name",
  search: true ,
  placeholder: 'Prix'
};


config3 = {
  displayKey: "name",
  search: true ,
  placeholder: 'Plus de filters'
};


config4 = {
  displayKey: "name",
  search: true ,
  placeholder: 'Distance'
};


options = [
    // Type here your category name
    {
        name: "Restaurants",
    },
    {
        name: "Events",
    },
    {
        name: "Clothing",
    },
    {
        name: "Bank",
    },
    {
        name: "Fitness",
    },
    {
        name: "Bookstore",
    }
];


options1 = [
  {
      name: "Recommended",
  },
  {
      name: "Default",
  },
  {
      name: "Popularity",
  },
  {
      name: "Latest",
  },
  {
      name: "Price: low to high",
  },
  {
      name: "Price: high to low",
  }
];
// Prix  Select
options2 = [
    {
        name: "2022",
    },
    {
        name: "2013",
    },
    {
        name: "4520",
    },

];

//plus de filters
options3 = [
  {
      name: "Marque ",
  },
  {
      name: "Engine",
  },
  {
      name: "Type Voiture",
  },
  {
      name: "annee",
  },
  {
      name: "siege",
  },
  {
      name: "categories",
  },
  {
      name: "Boites vitesse",
  },

];
// Distance Select
options4 = [
    {
        name: "Driving (5 mi.)",
    },
    {
        name: "Walking (1 mi.)",
    },
    {
        name: "Biking (2 mi.)",
    },
    {
        name: "Within 4 blocks",
    },
    {
        name: "Bicycle (6 mi.)",
    }
];


searchChange($event) {
    console.log($event);
}
reset() {
    this.resetOption = [];
}


// All Listings
singleListingsBox = [
  {
    mainImg: [
        {
            img: 'assets/img/cars/Mercedes-Benz AMG.jpg'
        },
        /*{
          img: 'assets/img/cars/Mercedes-Benz AMG-02.jpg'
      },*/
      {
        img: 'assets/img/cars/Mercedes-Benz AMG-03.jpg'
    },
    /*{
      img: 'assets/img/cars/Mercedes-Benz AMG-05.jpg'
  },*/
  {
    img: 'assets/img/cars/Mercedes-Benz AMG-06.jpg'
},

    ],
    categoryLink: 'car/detail',
    bookmarkLink: 'car/detail',
    detailsLink: 'car/detail',
    category: 'Restaurant',
    location: 'Francisco, USA',
    title: 'Mercedes-Benz AMG GT 2022.',
    price: 'economisez: $121',
    openORclose: 'Open Now',
    extraClass: 'status-open',
    authorName: 'James',
    authorImg: 'assets/img/user3.jpg',
    rating: [
        {
            icon: 'bx bxs-star'
        },
        {
            icon: 'bx bxs-star'
        },
        {
            icon: 'bx bxs-star'
        },
        {
            icon: 'bx bx-star'
        },
        {
            icon: 'bx bx-star'
        }
    ],
    ratingCount: '18'
},

    {
        mainImg: [
            {
                img: 'assets/img/cars/tesla4.jpg'
            }
            /*,
            {
                img: 'assets/img/cars/tesla model3.jpg'
            },
            {
                img: 'assets/img/cars/tesla int.jpg'
            }*/
        ],
        categoryLink: 'car/detail',
        bookmarkLink: 'car/detail',
        detailsLink: 'car/detail',
        category: 'Hotel',
        location: 'Los Angeles, USA',
        title: 'Tesla Model3 2021',
        price: 'economisez: $200',
        openORclose: 'Open Now',
        extraClass: 'status-open',
        authorImg: 'assets/img/user2.jpg',
        authorName: 'Sarah',
        rating: [
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bx-star'
            }
        ],
        ratingCount: '10'
    },
    {
        mainImg: [
            {
                img: 'assets/img/cars/porsche sedan.jpg'
            }
        ],
        categoryLink: 'car/detail',
        bookmarkLink: 'car/detail',
        detailsLink: 'car/detail',
        category: 'Shopping',
        location: 'Bangkok, Thailand',
        title: ' Porsche Panamera Turbo 2020',
        price: 'economisez: $110',
        openORclose: 'Close Now',
        extraClass: 'status-close',
        authorImg: 'assets/img/user3.jpg',
        authorName: 'James',
        rating: [
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star-half'
            }
        ],
        ratingCount: '35'
    },

    {
      mainImg: [
          {
              img: 'assets/img/cars/black ford mangan gt.jpg'
          },
          {
              img: 'assets/img/cars/black ford mangan gt-02.jpg'
          }
      ],
      categoryLink: 'car/detail',
      bookmarkLink: 'car/detail',
      detailsLink: 'car/detail',
      category: 'Beauty',
      location: 'Suwanee, USA',
      title: 'Ford Mustang GT 2020',
      price: 'economisez: $100',
      openORclose: 'Open Now',
      extraClass: 'status-open',
      authorImg: 'assets/img/user4.jpg',
      authorName: 'Andy',
      rating: [
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bx-star'
          },
          {
              icon: 'bx bx-star'
          }
      ],
      ratingCount: '15'
  },
    {
      mainImg: [
          {
              img: 'assets/img/cars/BMW iX/BMW-MY23-iX-Gallery-Exterior-08.jpg'
          }
      ],
      categoryLink: 'car/detail',
      bookmarkLink: 'car/detail',
      detailsLink: 'car/detail',
      category: 'Restaurant',
      location: 'New York, USA',
      title: 'BMW iX 2022',
      price: 'economisez: $50',
      authorImg: 'assets/img/user1.jpg',
      authorName: 'Taylor',
      openORclose: 'Open Now',
      extraClass: 'status-open',
      rating: [
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          },
          {
              icon: 'bx bxs-star'
          }
      ],
      ratingCount: '45'
  },



    {
        mainImg: [
            {
                img: 'assets/img/cars/BMW M2CS 2021/m2cs (2).jpg'
            },

            {
                img: 'assets/img/cars/BMW M2CS 2021/m2cs (5).jpg'
            },

            {
                img: 'assets/img/cars/BMW M2CS 2021/m2cs (8).jpg'
            }
        ],
        categoryLink: 'car/detail',
        bookmarkLink: 'car/detail',
        detailsLink: 'car/detail',
        category: 'Hotel',
        location: 'Los Angeles, USA',
        title: ' BMW M2CS 2021 ',
        price: 'economisez: $200',
        openORclose: 'Open Now',
        extraClass: 'status-open',
        authorImg: 'assets/img/user2.jpg',
        authorName: 'Sarah',
        rating: [
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bx-star'
            },
            {
                icon: 'bx bx-star'
            }
        ],
        ratingCount: '10'
    },
    {
        mainImg: [

            {
              img: 'assets/img/cars/Mini-Cooper-S/GP3Rear(1).jpg'
            }, {
              img: 'assets/img/cars/Mini-Cooper-S/GP3 Rear (3).jpg'
            }, {
              img: 'assets/img/cars/Mini-Cooper-S/GP3 Rear (4).jpg'
            }, {
              img: 'assets/img/cars/Mini-Cooper-S/GP3 Rear (5).jpg'
            },  {
              img: 'assets/img/cars/Mini-Cooper-S/GP3 Rear (7).jpg'
            }, {
              img: 'assets/img/cars/Mini-Cooper-S/GP3 Rear (8).jpg'
            },
        ],
        categoryLink: 'car/detail',
        bookmarkLink: 'car/detail',
        detailsLink: 'car/detail',
        category: 'Fitness',
        location: 'Bangkok, Thailand',
        title: 'Mini Cooper S GP3 Rear 2020',
        price: 'economisez: $110',
        openORclose: 'Open Now',
        extraClass: 'status-open',
        authorImg: 'assets/img/user3.jpg',
        authorName: 'James',
        rating: [
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bx-star'
            },
            {
                icon: 'bx bx-star'
            }
        ],
        ratingCount: '35'
    },
    {
        mainImg: [
            {
                img: 'assets/img/cars/BMW-M4/yellow/BMW M4 (1).jpg'
            },
            {
                img: 'assets/img/cars/BMW-M4/yellow/BMW M4 (2).jpg'
            },
            {
                img: 'assets/img/cars/BMW-M4/yellow/BMW M4 (3).jpg'
            }
        ],
        categoryLink: 'car/detail',
        bookmarkLink: 'car/detail',
        detailsLink: 'car/detail',
        category: 'Beauty',
        location: 'Suwanee, USA',
        title: 'BMW M4 2022',
        price: 'economisez: $100',
        openORclose: 'Open Now',
        extraClass: 'status-open',
        authorImg: 'assets/img/user4.jpg',
        authorName: 'Andy',
        rating: [
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bxs-star'
            },
            {
                icon: 'bx bx-star'
            },
            {
                icon: 'bx bx-star'
            }
        ],
        ratingCount: '15'
    }
]

gridListings: number = 1;

customOptions: OwlOptions = {
loop: true,
nav: true,
dots: false,
animateOut: 'fadeOut',
animateIn: 'fadeIn',
autoplayHoverPause: true,
autoplay: true,
mouseDrag: false,
items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ]
}

}
