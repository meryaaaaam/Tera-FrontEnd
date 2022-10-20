import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { InputMaskModule } from "primeng/inputmask";


import { Observable } from 'rxjs/Observable';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { HomeoneBlogComponent } from './components/pages/home-demo-one/homeone-blog/homeone-blog.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { HomeoneDestinationsComponent } from './components/pages/home-demo-one/homeone-destinations/homeone-destinations.component';
import { CategoryComponent } from './components/common/category/category.component';
import { HomeoneListingsComponent } from './components/pages/home-demo-one/homeone-listings/homeone-listings.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HometwoListingsComponent } from './components/pages/home-demo-two/hometwo-listings/hometwo-listings.component';
import { HometwoDestinationsComponent } from './components/pages/home-demo-two/hometwo-destinations/hometwo-destinations.component';
import { HometwoEventsComponent } from './components/pages/home-demo-two/hometwo-events/hometwo-events.component';
import { HometwoBlogComponent } from './components/pages/home-demo-two/hometwo-blog/hometwo-blog.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { TeamComponent } from './components/common/team/team.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ProductsListComponent } from './components/pages/products-list/products-list.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { RelatedProductsComponent } from './components/pages/products-details/related-products/related-products.component';
import { AuthorProfileComponent } from './components/pages/author-profile/author-profile.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { TopPlaceComponent } from './components/pages/top-place/top-place.component';
import { ListingsDetailsComponent } from './components/pages/listings-details/listings-details.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { EventsComponent } from './components/pages/events/events.component';
import { VerticalListingsLeftSidebarComponent } from './components/pages/vertical-listings-left-sidebar/vertical-listings-left-sidebar.component';
import { VerticalListingsRightSidebarComponent } from './components/pages/vertical-listings-right-sidebar/vertical-listings-right-sidebar.component';
import { VerticalListingsFullWidthComponent } from './components/pages/vertical-listings-full-width/vertical-listings-full-width.component';
import { GridListingsLeftSidebarComponent } from './components/pages/grid-listings-left-sidebar/grid-listings-left-sidebar.component';
import { GridListingsRightSidebarComponent } from './components/pages/grid-listings-right-sidebar/grid-listings-right-sidebar.component';
import { GridListingsFullWidthComponent } from './components/pages/grid-listings-full-width/grid-listings-full-width.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DashboardNavbarComponent } from './components/common/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidemenuComponent } from './components/common/dashboard-sidemenu/dashboard-sidemenu.component';
import { CopyrightsComponent } from './components/pages/dashboard/copyrights/copyrights.component';
import { StatsComponent } from './components/pages/dashboard/stats/stats.component';
import { RecentActivitiesComponent } from './components/pages/dashboard/recent-activities/recent-activities.component';
import { DashboardMessagesComponent } from './components/pages/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardWalletComponent } from './components/pages/dashboard/dashboard-wallet/dashboard-wallet.component';
import { DashboardReviewsComponent } from './components/pages/dashboard/dashboard-reviews/dashboard-reviews.component';
import { DashboardInvoiceComponent } from './components/pages/dashboard/dashboard-invoice/dashboard-invoice.component';
import { DashboardMyProfileComponent } from './components/pages/dashboard/dashboard-my-profile/dashboard-my-profile.component';
import { DashboardAddListingsComponent } from './components/pages/dashboard/dashboard-add-listings/dashboard-add-listings.component';
import { DashboardBookmarksComponent } from './components/pages/dashboard/dashboard-bookmarks/dashboard-bookmarks.component';
import { DashboardMyListingsComponent } from './components/pages/dashboard/dashboard-my-listings/dashboard-my-listings.component';
import { CarMakeComponent } from './components/pages/home-demo-two/car-make/car-make.component';
import { SectionComponent } from './components/pages/home-demo-two/section/section.component';
import { PlacesComponent } from './components/pages/home-demo-two/places/places.component';

import { SamllFooterComponent } from './components/common/samll-footer/samll-footer.component';

import { DetailComponent } from './components/Car/detail/detail.component';
//-import { CarComponent } from './components/car/car.component';
import { ListingComponent } from './components/Car/listing/listing.component';
import { EditComponent } from './components/Car/edit/edit.component';
import { AddComponent } from './components/pages/host/car/add/add.component';
import { NavbarComponent } from './components/common/espace-user/navbar/navbar.component';
import { SidemenuComponent } from './components/common/espace-user/sidemenu/sidemenu.component';
import { BookingComponent } from './components/pages/host/booking/booking.component';
import { ReviewsComponent } from './components/pages/host/reviews/reviews.component';
import { MyCarsComponent } from './components/pages/host/car/my-cars/my-cars.component';
import { HostComponent } from './components/pages/host/host.component';
import { UserDashboardComponent } from './components/pages/host/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/pages/host/profile/profile.component';
import { MessageComponent } from './components/pages/host/message/message.component';

import { PasswordModule } from "primeng/password";
import {ScrollTopModule} from 'primeng/scrolltop';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialog, ConfirmDialogModule} from 'primeng/confirmdialog';
import {PaginatorModule} from 'primeng/paginator';

//import {MaterialExampleModule} from '../material.module';
//import {DateRangePickerComparisonExample} from './date-range-picker-comparison-example';
//import {MatNativeDateModule} from '@angular/material/core';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SearchFormsComponent } from './components/common/search-forms/search-forms.component';

import { HashLocationStrategy , LocationStrategy} from '@angular/common';

import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import {DropdownModule} from 'primeng/dropdown';
import { TestComponent } from './test/test.component';

// import { FileUploadModule } from 'primeng/fileupload';

 import { FileUploadModule as PrimeNgFileUploadModule } from 'primeng/fileupload';

import { NgxDropzoneModule } from 'ngx-dropzone';

import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';

import {InputTextModule} from 'primeng/inputtext';

import { BookComponent } from './components/Car/book/book.component';
import { ChipModule } from 'primeng/chip';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
import { SercurityDepositComponent } from './components/pages/host/sercurity-deposit/sercurity-deposit.component';
import { CreateNewDisputeComponentComponent } from './components/pages/host/create-new-dispute-component/create-new-dispute-component.component';
import { CreateNewCheckoutAmountComponent } from './components/pages/host/create-new-checkout-amount/create-new-checkout-amount.component';
import { CashoutComponent } from './components/pages/host/cashout/cashout.component';
import { DisputesComponent } from './components/pages/host/disputes/disputes.component';
import { DashboardBookingsComponent } from './components/pages/host/dashboard-bookings/dashboard-bookings.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { WaletComponent } from './components/pages/host/walet/walet.component';
import { PermisComponent } from './components/pages/host/permis/permis.component';
import { ConfirmationService } from 'primeng/api';
import { LoginComponent } from './components/pages/Auth/login/login.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';
import { DashboardBookingsListComponent } from './components/pages/host/dashboard-bookings-list/dashboard-bookings-list.component';
import {GalleriaModule} from 'primeng/galleria';



    @NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    AppDownloadComponent,
    HowItWorksComponent,
    HomeoneBlogComponent,
    FeedbackStyleOneComponent,
    HomeoneDestinationsComponent,
    CategoryComponent,
    HomeoneListingsComponent,
    FeaturesComponent,
    HomeoneBannerComponent,
    FooterStyleOneComponent,
    NavbarStyleOneComponent,
    NavbarStyleTwoComponent,
    HometwoBannerComponent,
    HometwoListingsComponent,
    HometwoDestinationsComponent,
    HometwoEventsComponent,
    HometwoBlogComponent,
    ComingSoonComponent,
    NotFoundComponent,
    AboutUsComponent,
    PartnerComponent,
    TeamComponent,
    FunfactsComponent,
    HowItWorksPageComponent,
    PricingComponent,
    GalleryComponent,
    FaqComponent,
    ContactComponent,
    FooterStyleTwoComponent,
    BlogGridComponent,
    BlogRightSidebarComponent,
    BlogDetailsComponent,
    ProductsListComponent,
    CartComponent,
    CheckoutComponent,
    ProductsDetailsComponent,
    RelatedProductsComponent,
    AuthorProfileComponent,
    CategoriesComponent,
    TopPlaceComponent,
    ListingsDetailsComponent,
    EditComponent,
    EventsDetailsComponent,
    EventsComponent,
    VerticalListingsLeftSidebarComponent,
    VerticalListingsRightSidebarComponent,
    VerticalListingsFullWidthComponent,
    GridListingsLeftSidebarComponent,
    GridListingsRightSidebarComponent,
    GridListingsFullWidthComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidemenuComponent,
    CopyrightsComponent,
    StatsComponent,
    RecentActivitiesComponent,
    DashboardMessagesComponent,
    DashboardBookingsComponent,
    DashboardWalletComponent,
    DashboardReviewsComponent,
    DashboardInvoiceComponent,
    DashboardMyProfileComponent,
    DashboardAddListingsComponent,
    DashboardBookmarksComponent,
    DashboardMyListingsComponent,
    CarMakeComponent,
    SectionComponent,
    PlacesComponent,
    SamllFooterComponent,

    DetailComponent,
    //CarComponent,
    ListingComponent,
    AddComponent,
    NavbarComponent,
    SidemenuComponent,
    BookingComponent,
    ReviewsComponent,
    MyCarsComponent,
    HostComponent,
    UserDashboardComponent,
    ProfileComponent,
    MessageComponent,
    SearchFormsComponent,
    TestComponent,

    BookComponent,
    SercurityDepositComponent,
    CreateNewDisputeComponentComponent,
    CreateNewCheckoutAmountComponent ,
    CashoutComponent,
    DisputesComponent,
    WaletComponent,
    PermisComponent,
    LoginComponent,
    DashboardBookingsListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    InputMaskModule,
    HttpClientModule,

    CarouselModule,
    SelectDropDownModule,
    NgxTypedJsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    BsDatepickerModule,
    TimepickerModule,

    SliderModule,
    ButtonModule,
    CalendarModule,
    ToastModule,
    DropdownModule,PrimeNgFileUploadModule,StepsModule,CardModule,
    InputTextModule,
    ChipModule,CheckboxModule,InputNumberModule,RadioButtonModule,
    MessagesModule,MessageModule,ScrollTopModule,ConfirmDialogModule,
    PasswordModule,
    ProgressBarModule,
    TableModule ,GalleriaModule , PaginatorModule





  ],
  providers:  [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    } , BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
