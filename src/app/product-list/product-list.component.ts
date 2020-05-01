import { Component, OnInit } from '@angular/core';
import { MyserviceService, Product } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public message= "";
  products : Product[];

  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
onClick()
{
  console.log("Item added to cart")
  this.message ='Item added to cart';
}

  handleSuccessfulResponse(response) {
    this.products = response;
  }
}