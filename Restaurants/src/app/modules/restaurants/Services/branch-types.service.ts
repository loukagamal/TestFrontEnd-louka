import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Api } from 'src/app/core/constants/api';
import { BranchTypes } from '../models/BranchTypes';

@Injectable({
  providedIn: 'root'
})
export class BranchTypesService {

  branch!:BranchTypes

  constructor(private http:HttpClient) { 
   
  }

  getAllBranchTypes():Observable<BranchTypes[]>
{
  // let header= new HttpHeaders();
  //   header.append('Accept-Language', 'en-US,en');
  let header = new HttpHeaders();
header = header.set('Accept-Language', 'ar');
    let options = { headers: header} 
     
 return this.http.get<BranchTypes[]>(Api.Base +Api.resturant.getBranch, options).pipe(catchError((err)=>
 {
 return throwError(err.message||"Server error");
 })
 )
}

setbranch(branch :BranchTypes){

  this.branch=branch;

}
getbranch(){
  return this.branch;
}
}
