import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Restaurants } from '../models/Restaurants';
import {catchError} from 'rxjs/operators';
import { Api } from 'src/app/core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  url:string=""
  
 

  constructor(private http:HttpClient) { 
   this.url=Api.Base
  }

  getAllRestaurants():Observable<Restaurants[]>
{
 
  let header = new HttpHeaders();
header = header.set('Accept-Language', 'ar');
    let options = { headers: header} 
   
     
 return this.http.get<Restaurants[]>(this.url+Api.resturant.getRestaurants, options).pipe(catchError((err)=>
 {
 return throwError(err.message||"Server error");
 })
 )
}
getAllRestaurantsById(id? : any):Observable<Restaurants[]>
{
  this.url=""
  let header = new HttpHeaders();
header = header.set('Accept-Language', 'ar');
    let options = { headers: header} 
   
    if(id){
      this.url+=`?branch_type_id=${id}`
    }

 
 return this.http.get<Restaurants[]>(Api.Base+Api.resturant.getRestaurants + this.url, options).pipe(catchError((err)=>
 {
 return throwError(err.message||"Server error");
 })
 )
}

}
