import { Component, OnInit } from '@angular/core';
import { MyserviceService, Product } from '../myservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  message =" ";
  nCnt: number = 0;
  product: Product[];
  selectedProductToCart: Product;
  addedProductId: String;
addedtocart = false;
  constructor(private _myservice: MyserviceService) { }

  ngOnInit(): any {
    this._myservice.getList().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }


  add(productId:String) {
  let userId =   localStorage.getItem("activeUser");
   this._myservice.addItemToCart(productId, userId).subscribe(backendData => {         
    console.log(backendData);
    if (backendData!=null) {
      this.addedtocart = true;
     this.addedProductId=productId;
     this.selectedProductToCart=this.product.find(i=>i.productid==productId);
     this.nCnt = this.nCnt + 1;
     this.message="clicked" + this.nCnt;
    }
    })
  }

  handleSuccessfulResponse(response) {
    this.product = response;
    console.log(response);
  }
}