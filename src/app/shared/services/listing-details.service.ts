import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { list } from '../interfaces/listing-details.interface';
import { icons } from '../interfaces/icon.iterface';


@Injectable({
  providedIn: 'root'
})
export class ListingDetailsService {

  constructor(private _http: HttpClient) { }
  public baseUrl = 'http://localhost:3000';
  
  
  getListService(){
    return this._http.get<list[]>(this.baseUrl +'/listings');
  }
  geticons(){
    return this._http.get<icons[]>(this.baseUrl+ '/icons');
  }
}
 