import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Restaurants } from '../models/Restaurants';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  _url="backend.eizymenu.com/api/home/restaurants?branch_type_id=1"

  constructor(private http:HttpClient) { }

  getAllRestaurants():Observable<Restaurants[]>
{
 return this.http.get<Restaurants[]>(this._url).pipe(catchError((err)=>
 {
 return throwError(err.message||"Server error");
 })
 )
}
}
