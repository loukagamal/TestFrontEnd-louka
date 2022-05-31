import { Component, OnInit } from '@angular/core';
import { BranchTypes } from '../models/BranchTypes';
import { Menu } from '../models/MenuData';
import { Offers } from '../models/Offers';
import { RestaurantsData } from '../models/RestaurantData';
import { Restaurants } from '../models/Restaurants';
import { RestaurantsDetails } from '../models/RestaurantsDetails';
import { BranchTypesService } from '../Services/branch-types.service';
import { RestaurantDetailsService } from '../Services/restaurant-details.service';
import { RestaurantsService } from '../Services/restaurants.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurants!:Restaurants[] ;
  ErrMsg=''
  restaurantsDatails! :RestaurantsDetails[];
  branchTypesData!:BranchTypes[];
  result!: Restaurants[];
  manu!:Menu[];
  offers!:Offers[];
  restaurantsData!: RestaurantsData[];

  constructor(private restaurantsService : RestaurantsService ,
     private restaurantService :RestaurantDetailsService,
     private branchTypes: BranchTypesService) { 
     }

  ngOnInit(): void {

   
  }
  ngAfterViewInit(){
    this.getAllRestaurantDetails()
  }
  



   getAllRestaurantDetails():RestaurantsDetails[]{

    this.restaurantService.getAllRestaurantsDetails().subscribe((res: any) => {
      this.restaurantsDatails = res.data;
      this.manu=res.data.menu;
      this.offers=res.data.offers;
      this.restaurantsData=res.data.restaurant


  
    });


    return   this.restaurantsDatails;


  }
 
}
