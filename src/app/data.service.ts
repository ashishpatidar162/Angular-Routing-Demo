import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  createDb(){
  let products=[
    { id:1 , name: "products 1"},
    { id:2 , name: "products 2"},
    { id:3 , name: "products 3"},
    { id:4 , name: "products 4"},
    ];
  
  return { products};
};
}