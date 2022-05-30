import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RestaurantsListComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    HttpClientModule
  
  ],
  exports :[
    RestaurantsListComponent
  ]


})
export class RestaurantsModule { }
