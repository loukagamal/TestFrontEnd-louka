import { Component, OnInit } from '@angular/core';
import { BranchTypes } from '../../restaurants/models/BranchTypes';
import { Restaurants } from '../../restaurants/models/Restaurants';
import { RestaurantsDetails } from '../../restaurants/models/RestaurantsDetails';
import { BranchTypesService } from '../../restaurants/Services/branch-types.service';
import { RestaurantDetailsService } from '../../restaurants/Services/restaurant-details.service';
import { RestaurantsService } from '../../restaurants/Services/restaurants.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  restaurants!:Restaurants[] ;
  ErrMsg=''
  restaurantsDatails! :RestaurantsDetails[];
  branchTypesData!:BranchTypes[];
  result!: Restaurants[];

  constructor(private restaurantsService : RestaurantsService ,
     private restaurantDetails :RestaurantDetailsService,
     private branchTypes: BranchTypesService) { 
      this.getAllBranchTypes()
     }

  ngOnInit(): void {

    this.getAllRestaurants();
  }

  getAllRestaurants():Restaurants[]{

    this.restaurantsService.getAllRestaurants().subscribe((res: any) => {
      this.restaurants = res.data;
    });

    return this.restaurants;


  }
 
  getAllBranchTypes(){
    this.branchTypes.getAllBranchTypes().subscribe((res: any) => {
      this.branchTypesData = res.data;
    });

    return this.branchTypesData;
  }
  getAllRestaurantById(events:any){

    this.restaurants=events
    console.log(this.restaurants);
    
  }

  

}
