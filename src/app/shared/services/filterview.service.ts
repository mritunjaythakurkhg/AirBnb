import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { list } from '../interfaces/listing-details.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterviewService {

  constructor(private _http: HttpClient) { }
  public baseUrl = 'http://localhost:3000';
  // function for calling specific data for specific location 

  filterScene(){
    return this._http.get<list[]>(this.baseUrl+ '/listings');
  }
}
