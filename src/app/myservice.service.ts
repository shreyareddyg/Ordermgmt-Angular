import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpService: HttpClient) { }

  public getList() {
    console.log("ins service get list");
    return this.httpService.get<Product[]>("http://localhost:6565/products/GetList");
  }

  public getProduct(id : number) {
    console.log("ins service get Product");
    return this.httpService.get<Product>("http://localhost:6565/products/GetProduct/"+id);
  }

   public addItemToCart(productid: String) {
    console.log("ins service get item");
    let options = { headers:{ 'Content-Type': 'application/json'}  } 
    var cart: Cart = new Cart("123",productid,1);
    var response = this.httpService.post<string>("http://localhost:6500/api/v1/orders/addtocart", JSON.stringify(cart), options);
  console.log(response);
  return response;
	}

  public  getProducts() {
    console.log("ins service get products");
		return this.httpService.get<Cart[]>("http://localhost:6500/api/v1/orders/products");
	}

  public createOrder(){
    console.log("ins service created order");
    let options = { headers:{ 'Content-Type': 'application/json'}  } 
    var order: Order = new Order("123","46-152",'');
    var response = this.httpService.post<string>("http://localhost:6500/api/v1/orders/createOrder", JSON.stringify(order), options);
  console.log(response);
  return response;
	}
  
	 public  getAllOrders() {
    console.log("ins service get orders");
		return this.httpService.get<Order[]>("http://localhost:6500/api/v1/orders/all");
	}

}

export class Product {
   productid: String;
	 productUin: String;
  productispresent: boolean;

  constructor(productid: String,productUin: String, productispresent: boolean)
{
  this.productUin=productUin;
  this.productid=productid;
  this.productispresent=productispresent;
}

}
export class Cart{
  userId: String;
  productId: String;
  quantity: number;

constructor(userId: String,productId: String, quantity: number)
{
  this.userId=userId;
  this.productId=productId;
  this.quantity=quantity;
}
}
export class Order{
  userId: String;
  addressId: String;
  orderId: String;

constructor(userId: String,addressId: String, orderId: String)
{
  this.userId=userId;
  this.addressId=addressId;
  this.orderId=orderId;
}


}