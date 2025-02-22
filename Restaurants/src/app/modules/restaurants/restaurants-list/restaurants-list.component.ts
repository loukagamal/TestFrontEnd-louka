import { Component, OnInit } from '@angular/core';
import { BranchTypes } from '../models/BranchTypes';
import { Restaurants } from '../models/Restaurants';
import { RestaurantsDetails } from '../models/RestaurantsDetails';
import { BranchTypesService } from '../Services/branch-types.service';
import { RestaurantDetailsService } from '../Services/restaurant-details.service';
import { RestaurantsService } from '../Services/restaurants.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {
  
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
      console.log(res)
    });

    return this.branchTypesData;
  }
  getAllRestaurantById(events:any){

    this.restaurants=events
    console.log(this.restaurants);
    
  }
}
