import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/MenuData';
import { RestaurantDetailsService } from '../Services/restaurant-details.service';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.scss']
})
export class ManuComponent implements OnInit {
   menu!:Menu[]; 
  isRestaurantsDetailsDone: boolean=false;
    constructor(private restaurantService :RestaurantDetailsService) { 
      this.getAllRestaurantDetails();

    }

  ngOnInit(): void {

  }


   getAllRestaurantDetails():Menu[]{

    this.restaurantService.getAllRestaurantsDetails().subscribe((res: any) => {
      this.isRestaurantsDetailsDone=true;
      console.log(res.data.menu);
      
      this.menu=res.data.menu;

    });

console.log( this.menu);

    return   this.menu;


  }

}
