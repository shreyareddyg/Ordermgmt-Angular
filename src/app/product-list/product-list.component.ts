import { Component, OnInit } from '@angular/core';
import { MyserviceService, Product } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProviderAstType } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public message = "";
  product: Product[];
  productId: String;
  constructor(private _myservice: MyserviceService) { }

  ngOnInit(): any {
    this._myservice.getList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }


  add(productId:String) {
    console.log(productId);
    this.message = 'Item added to cart';
   this._myservice.addItemToCart(productId).subscribe(backendData => {         
    console.log(backendData);
    if (backendData) {}
    })
  }

  handleSuccessfulResponse(response) {
    this.product = response;
    console.log(response);
  }
}