import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ManuComponent } from './manu/manu.component';
import { OfferComponent } from './offer/offer.component';


@NgModule({
  declarations: [
    RestaurantsListComponent,
    RestaurantDetailsComponent,
    ManuComponent,
    OfferComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    HttpClientModule,
    CoreModule
  
  ],
  exports :[
    RestaurantsListComponent
  ]


})
export class RestaurantsModule { }
