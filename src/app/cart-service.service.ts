import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
}

export class Cart {
  userid: String;
  productid: String;
 quantity: number;
}