import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  category:string;
  pageNumber:string;
  
  constructor( private _HttpClient:HttpClient) { }

  getTrendingAll(pageNumber?,category?):Observable<any>
  {  
    if(pageNumber != undefined){
      this.pageNumber = `&page=${pageNumber}`;
    }else{
      this.pageNumber=``
    }
    if(category != undefined){
      this.category = category;
    }
    else{
      this.category = `all`
    }
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${this.category}/week?api_key=8c4a17696dab522853861e576ee44805${this.pageNumber}`);
  }
  
}
