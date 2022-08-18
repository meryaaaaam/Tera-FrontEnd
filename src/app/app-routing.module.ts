import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarComponent } from './components/Car/car.component';
import { DetailComponent } from './components/Car/detail/detail.component';
import { ListingComponent } from './components/Car/listing/listing.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { AuthorProfileComponent } from './components/pages/author-profile/author-profile.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardAddListingsComponent } from './components/pages/dashboard/dashboard-add-listings/dashboard-add-listings.component';
import { DashboardBookmarksComponent } from './components/pages/dashboard/dashboard-bookmarks/dashboard-bookmarks.component';
import { DashboardInvoiceComponent } from './components/pages/dashboard/dashboard-invoice/dashboard-invoice.component';
import { DashboardMessagesComponent } from './components/pages/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardMyListingsComponent } from './components/pages/dashboard/dashboard-my-listings/dashboard-my-listings.component';
import { DashboardMyProfileComponent } from './components/pages/dashboard/dashboard-my-profile/dashboard-my-profile.component';
import { DashboardReviewsComponent } from './components/pages/dashboard/dashboard-reviews/dashboard-reviews.component';
import { DashboardWalletComponent } from './components/pages/dashboard/dashboard-wallet/dashboard-wallet.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { EventsComponent } from './components/pages/events/events.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GridListingsFullWidthComponent } from './components/pages/grid-listings-full-width/grid-listings-full-width.component';
import { GridListingsLeftSidebarComponent } from './components/pages/grid-listings-left-sidebar/grid-listings-left-sidebar.component';
import { GridListingsRightSidebarComponent } from './components/pages/grid-listings-right-sidebar/grid-listings-right-sidebar.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { BookingComponent } from './components/pages/host/booking/booking.component';
import { AddComponent } from './components/pages/host/car/add/add.component';
import { MyCarsComponent } from './components/pages/host/car/my-cars/my-cars.component';
import { HostComponent } from './components/pages/host/host.component';
import { MessageComponent } from './components/pages/host/message/message.component';
import { ProfileComponent } from './components/pages/host/profile/profile.component';
import { ReviewsComponent } from './components/pages/host/reviews/reviews.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { ListingsDetailsComponent } from './components/pages/listings-details/listings-details.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { TopPlaceComponent } from './components/pages/top-place/top-place.component';
import { VerticalListingsFullWidthComponent } from './components/pages/vertical-listings-full-width/vertical-listings-full-width.component';
import { VerticalListingsLeftSidebarComponent } from './components/pages/vertical-listings-left-sidebar/vertical-listings-left-sidebar.component';
import { VerticalListingsRightSidebarComponent } from './components/pages/vertical-listings-right-sidebar/vertical-listings-right-sidebar.component';
import { AuthGuard } from './services/guard/authguard.guard';
import { TestComponent } from './test/test.component';

import { BookComponent } from './components/Car/book/book.component';
import { SercurityDepositComponent } from './components/pages/host/sercurity-deposit/sercurity-deposit.component';
import { DashboardBookingsComponent } from './components/pages/host/dashboard-bookings/dashboard-bookings.component';
import { DisputesComponent } from './components/pages/host/disputes/disputes.component';
import { CashoutComponent } from './components/pages/host/cashout/cashout.component';
import { EditComponent } from './components/Car/edit/edit.component';
import { WaletComponent } from './components/pages/host/walet/walet.component';
import { PermisComponent} from './components/pages/permis/permis.component';


const routes: Routes = [
    {path: 'index-1', component: HomeDemoOneComponent},
    {path: '', component: HomeDemoTwoComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'how-it-works', component: HowItWorksPageComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'blog-grid', component: BlogGridComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'products-list', component: ProductsListComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'single-products', component: ProductsDetailsComponent},

    {path: 'user-profile/:id', component: AuthorProfileComponent},
    {path: 'permis', component: PermisComponent},


    {path: 'categories', component: CategoriesComponent},
    {path: 'destinations', component: TopPlaceComponent},
    {path: 'vertical-listings-left-sidebar', component: VerticalListingsLeftSidebarComponent},
    {path: 'vertical-listings-right-sidebar', component: VerticalListingsRightSidebarComponent},
    {path: 'vertical-listings-full-width', component: VerticalListingsFullWidthComponent},
    {path: 'grid-listings-left-sidebar', component: GridListingsLeftSidebarComponent},
    {path: 'grid-listings-right-sidebar', component: GridListingsRightSidebarComponent},
    {path: 'grid-listings-full-width', component: GridListingsFullWidthComponent},
    {path: 'single-listings', component: ListingsDetailsComponent},
    {path: 'events', component: EventsComponent},
    {path: 'single-events', component: EventsDetailsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard-messages', component: DashboardMessagesComponent},
    {path: 'dashboard-wallet', component: DashboardWalletComponent},
    {path: 'dashboard-reviews', component: DashboardReviewsComponent},
    {path: 'dashboard-invoice', component: DashboardInvoiceComponent},
   // {path: 'dashboard-my-profile', component: DashboardMyProfileComponent},
    {path: 'dashboard-add-listings', component: DashboardAddListingsComponent},
    {path: 'dashboard-bookmarks', component: DashboardBookmarksComponent},
   // {path: 'dashboard-my-listings', component: DashboardMyListingsComponent},
  //  {path: 'dashboard-my-listings', component: DashboardMyListingsComponent},


    //{path: 'car/detail/:id', component: DetailComponent},
    {path: 'car/detail', component: DetailComponent},
    {path: 'car/list', component: ListingComponent},
    {path: 'car/book', component: BookComponent},

    {path: 'user/add-car', component: AddComponent  , canActivate: [AuthGuard ] },
    {path: 'user/list', component: MyCarsComponent  , canActivate: [AuthGuard ] },
    {path: 'user/update-car', component: EditComponent  , canActivate: [AuthGuard ] },
    {path: 'user/reviews', component: ReviewsComponent  , canActivate: [AuthGuard ] },
    {path: 'user/booking', component: BookingComponent , canActivate: [AuthGuard ] },
    {path: 'user/profile', component: ProfileComponent , canActivate: [AuthGuard ] },
    {path: 'user/messages', component: MessageComponent , canActivate: [AuthGuard ] },
    {path: 'user/security-deposit', component: SercurityDepositComponent , canActivate: [AuthGuard ] },
    {path: 'user/dashboard-bookings', component: DashboardBookingsComponent, canActivate: [AuthGuard ]},
    {path: 'user/wallet', component: WaletComponent, canActivate: [AuthGuard ]},

    {path: 'user/disputes/list', component: DisputesComponent, canActivate: [AuthGuard ]},
    {path: 'user/cashout/list', component: CashoutComponent , canActivate: [AuthGuard ]},

    {path: 'espace-user', component: HostComponent , canActivate: [AuthGuard ] },


    {path: 'test', component: TestComponent},

    /*{path: 'espace-user', component: HostComponent},
    {path: 'espace-user', component: HostComponent},
    {path: 'espace-user', component: HostComponent},
    {path: 'espace-user', component: HostComponent},*/






    /*{
      path: "cars",
      component: CarComponent,
      children: [
        { path: "detail", component: DetailComponent },
        { path: "list", component: ListingComponent },
        { path: "", redirectTo: "detail", pathMatch: "full" },
      ],
    },*/


    {path: '**', component: NotFoundComponent}



    // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
      //{ relativeLinkResolution: 'legacy' } ,
      { enableTracing: true } // <-- debugging purposes only
      )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
