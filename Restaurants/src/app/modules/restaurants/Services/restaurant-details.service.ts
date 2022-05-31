import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Api } from 'src/app/core/constants/api';
import { Restaurants } from '../models/Restaurants';
import { RestaurantsDetails } from '../models/RestaurantsDetails';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {

  _url="";
  restaurantId!:Restaurants;
 

  constructor(private http:HttpClient) { 
   
  }

  getAllRestaurantsDetails():Observable<RestaurantsDetails[]>
{
 
  this._url=""
  let header = new HttpHeaders();
header = header.set('Accept-Language', 'ar');
    let options = { headers: header} 
   
    if(this.restaurantId){
      this._url+=this.restaurantId.id
    }else{ this._url+='1'}
     
 return this.http.get<RestaurantsDetails[]>(Api.Base+Api.resturant.getDetails + this._url, options).pipe(catchError((err)=>
 {
 return throwError(err.message||"Server error");
 })
 )
}

setRrstaurantsId(restaurant? : any){
  this.restaurantId =restaurant;
}


}
