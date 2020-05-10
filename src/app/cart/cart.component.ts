import { Component, OnInit } from '@angular/core';
import { Product, MyserviceService, Cart } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Cart[];
  productId: number;
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    let userId = localStorage.getItem("activeUser");
    console.log("userId", userId);
    this.myservice.getProducts(userId).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  deleteproduct(productId: String): any {
    let userId = localStorage.getItem("activeUser");
    console.log("delete product");
    this.myservice.removeProductFromCart(productId, userId).subscribe(
      (result) => {
        if (result != null) {
    
          this.cartItems=this.cartItems.filter(cart=> cart.productId!=productId)
          alert("Deleted Succesfully the  ProductId: " + productId);
        }
      });
  }


  buy() {
    let userId = localStorage.getItem("activeUser");
    this.myservice.createOrder(userId).subscribe(backendData => {
      console.log(backendData);
      if (backendData) {
        this.router.navigate(['/order']);
      }
    })
  }

  handleSuccessfulResponse(response) {
    this.cartItems = response;
    console.log(response);
  }

}
