import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpService: HttpClient) { }

  public getList() {
    console.log("ins service get list");
    return this.httpService.get<Product[]>("http://localhost:6504/products/GetList");
  }


   public addItemToCart(productid: String, userId: String) {
    console.log("ins service get item");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json' });
  let options = { headers: headers };
    var cart: Cart = new Cart(userId,productid,1);
    var response = this.httpService.post<string>("http://localhost:6501/cart/addtocart", JSON.stringify(cart),options);
  console.log(response);
  return response;
	}

  public  getProducts(userId: String) {
    console.log("ins service get products");
		return this.httpService.get<Cart[]>("http://localhost:6501/cart/products/" + userId);
	}

  public createOrder(userId: String){
    console.log("ins service created order");
    let options = { headers:{ 'Content-Type': 'application/json'}  } 
    var order: Order = new Order(userId,"46-152",'',' ',[]);
    var response = this.httpService.post<string>("http://localhost:6502/order/createOrder", JSON.stringify(order), options);
  console.log(response);
  return response;
	}
  
	 public  getAllOrders() {
    console.log("ins service get orders");
		return this.httpService.get<Order[]>("http://localhost:6502/order/all");
	}

  
	public removeProductFromCart( productId: String, userId: String) {
		const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:6501/cart/" + userId + "/" +productId,  { headers, responseType: 'text'});
	}


	public  removeOrder(orderId : String) {
console.log("delete order")
const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:6502/order/" + orderId,  { headers, responseType: 'text'});
	}


  public  getCustomers() {
    console.log("ins service get products");
		return this.httpService.get<User[]>("http://localhost:6503/customer/users");
	}


 /* 	public getProductsForOrder(orderId :String ) {
    console.log("ins service get products for orders");
	
		return this.httpService.get<Order[]>("http://localhost:6500/api/v1/orders/" + orderId + "/" + "products" );
	}
*/
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
export class products{
  productId: String;
   productStatus: String;
  giftStatus: String;
  productUIN:String;
}
export class Order{
  userId: String;
  addressId: String;
  orderId: String;
  orderInitiateTime: String;
  product:products[];

constructor(userId: String,addressId: String, orderId: String,orderInitiateTime: String, product:products[])
{
  this.userId=userId;
  this.addressId=addressId;
  this.orderId=orderId;
  this.orderInitiateTime=orderInitiateTime;
  this.product=product;
}

}
export class User{
  userId: String;
  username: String;

  constructor(userId: String,username: String)
{
  this.userId=userId;
  this.username=username;

}
}