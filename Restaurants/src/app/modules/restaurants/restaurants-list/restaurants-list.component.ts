import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../models/Restaurants';
import { RestaurantsService } from '../Services/restaurants.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {
  
  restaurants!:Restaurants[];
  ErrMsg=''

  constructor(private restaurantsService : RestaurantsService) { }

  ngOnInit(): void {


    this.restaurantsService.getAllRestaurants().subscribe(
      data=>
      {
      this.restaurants=data
      },
      error=>
      {
      this.ErrMsg=error
      }
      );
     

    console.log( this.restaurants)

  }

}
