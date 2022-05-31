import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BranchTypes } from '../../restaurants/models/BranchTypes';
import { Restaurants } from '../../restaurants/models/Restaurants';
import { RestaurantsDetails } from '../../restaurants/models/RestaurantsDetails';
import { BranchTypesService } from '../../restaurants/Services/branch-types.service';
import { RestaurantDetailsService } from '../../restaurants/Services/restaurant-details.service';
import { RestaurantsService } from '../../restaurants/Services/restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restaurants!:Restaurants[] ;
  ErrMsg=''
  restaurantsDatails! :RestaurantsDetails[];
  branchTypesData!:BranchTypes[];
    result!: Restaurants[];
  id="";

  constructor(private restaurantsService : RestaurantsService ,
     private branch: BranchTypesService,private restaurantDeta :RestaurantDetailsService , private route:Router) { 
      this.getAllBranchTypes();
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
    this.branch.getAllBranchTypes().subscribe((res: any) => {
      this.branchTypesData = res.data;
    });

    return this.branchTypesData;
  }


 

getAllRestaurantById(events:any){

   this.restaurantsService.getAllRestaurantsById(events.id).subscribe((res: any) => {
    this.restaurants = res.data;
  console.log( this.restaurants );
  
  });

  return this.restaurants;

  
}

setRestaurantID(rstaurantsId : any){
  this.restaurantDeta.setRrstaurantsId(rstaurantsId);
}
}
