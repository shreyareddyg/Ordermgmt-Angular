import { Component, OnInit } from '@angular/core';
import { Product, MyserviceService, Cart } from '../myservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Cart[];
  productId:number;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): any {
    this.myservice.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

buy()
{
  this.myservice.createOrder().subscribe(backendData => {         
    console.log(backendData);
    if (backendData) {
      //
    }
    })
  }

  handleSuccessfulResponse(response) {
    this.cartItems = response;
    console.log(response);
  }

}
