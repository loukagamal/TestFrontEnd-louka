import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BranchTypes } from 'src/app/modules/restaurants/models/BranchTypes';
import { Restaurants } from 'src/app/modules/restaurants/models/Restaurants';
import { RestaurantsService } from 'src/app/modules/restaurants/Services/restaurants.service';
import { HomeComponent } from '../../home/home/home.component';
import { BranchTypesService } from '../../restaurants/Services/branch-types.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 @Input() branchTypesData!:BranchTypes[];
 @Output() restaurantsById =new EventEmitter<Restaurants[]>();


  result!: Restaurants[];
  id="";


  constructor(private restaurants:RestaurantsService ,private branch: BranchTypesService ,private routet :Router) { }
  
  


  sitename = 'pizzahut';


  ngOnInit(): void {
  }
  

  branchTypes(branchid :any){
   
    this.restaurantsById.emit(branchid)
}
}
