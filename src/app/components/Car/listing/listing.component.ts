import { DatePipe } from '@angular/common';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit , AfterContentInit{
  results ;
  startdate : any;
  enddate :any  ;
  start : any ; end : any;
  from ; to ;
  datePipe : DatePipe = new DatePipe('en-GB');

  constructor(public vs : VehiculeService , private router: Router , private route: ActivatedRoute , private res : ReservationService)
  {
  }
  ngOnInit() {
   /* this.vs.getAll().subscribe(
      (data) => {this.results = data ; console.log(this.results)}

    );*/



   this.route.queryParams.subscribe(params => {
      this.start = params['st'];
       this.end = params['se'];
      ;}) ;

   //   console.log( typeof this.start);
      //console.log(this.start , this.end) ;
      this.resetOption = [this.options[0]];

     this.from = this.datePipe.transform(this.start, 'dd/MM/yyyy H:m:s');

     this.to = this.datePipe.transform(this.end, 'dd/MM/yyyy H:m:s');
    console.log(this.from , this.to);


     this.get(this.from , this.to) ;

}


  ngAfterContentInit()
  {  this.route.queryParams.subscribe(params => {
    this.start = params['st'];
     this.end = params['se'];
    ;}) ;

 //   console.log( typeof this.start);
    //console.log(this.start , this.end) ;
    this.resetOption = [this.options[0]];

   this.from = this.datePipe.transform(this.start, 'dd/MM/yyyy H:m:s');

   this.to = this.datePipe.transform(this.end, 'dd/MM/yyyy H:m:s');
  console.log(this.from , this.to);


   this.get(this.from , this.to) ;
}
  get(start , end )
  {
    this.res.GetAvailableReservation(start,end).subscribe(
      data => {
        this.results = data ;
        console.log(this.results);

      }


    )
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
ok(id) {
    console.log(id);
    this.router.navigate(['/car/detail'],{queryParams : {'id':id, 'st':this.start , 'se':this.end }});
}



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
