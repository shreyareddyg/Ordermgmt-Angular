import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  public getList() {
    console.log("ins service get list");
    return this.http.get<Product[]>("http://localhost:6504/products/GetList");
  }


   public addItemToCart(productid: string, userId: string) {
    console.log("ins service get item");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json' });
  let options = { headers: headers };
    var cart: Cart = new Cart(userId,productid,1);
    var response = this.http.post<string>("http://localhost:6501/cart/addtocart", JSON.stringify(cart),options);
  console.log(response);
  return response;
	}


  public  getProducts(userId: string) {
    console.log("ins service get products");
		return this.http.get<Cart[]>("http://localhost:6501/cart/products/" + userId);
	}

  public createOrder(userId: string){
    console.log("ins service created order");
    let options = { headers:{ 'Content-Type': 'application/json'}  } 
    var order: Order = new Order(userId,"46-152",'','intiated',' ',[]);
    var response = this.http.post<string>("http://localhost:6502/order/createOrder", JSON.stringify(order), options);
  console.log(response);
  return response;
	}
  
	 public  getOrders(userId : string) {
    console.log("ins service get orders");
		return this.http.get<Order[]>("http://localhost:6502/order/getorder/" + userId);
	}

  
	public removeProductFromCart( productId: string, userId: string) {
		const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete("http://localhost:6501/cart/" + userId + "/" +productId,  { headers, responseType: 'text'});
	}


	public  removeOrder(orderId : string) {
console.log("delete order")
const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete("http://localhost:6502/order/" + orderId,  { headers, responseType: 'text'});
	}


  public  getCustomers() {
    console.log("ins service get products");
		return this.http.get<User[]>("http://localhost:6503/customer/users");
	}


}

export class Product {
   productid: string;
	 productUin: string;
  productispresent: boolean;

  constructor(productid: string,productUin: string, productispresent: boolean)
{
  this.productUin=productUin;
  this.productid=productid;
  this.productispresent=productispresent;
}

}
export class Cart{
  userId: string;
  productId: string;
  quantity: number;

constructor(userId: string,productId: string, quantity: number)
{
  this.userId=userId;
  this.productId=productId;
  this.quantity=quantity;
}
}
export class products{
  productId: string;
   productStatus: string;
  giftStatus: string;
  productUIN:string;
}
export class Order{
  userId: string;
  addressId: string;
  orderId: string;
  orderDispatchStatus: string;
  orderInitiateTime: string;
  product:products[];

constructor(userId: string,addressId: string, orderId: string,orderDispatchStatus: string,orderInitiateTime: string, product:products[])
{
  this.userId=userId;
  this.addressId=addressId;
  this.orderId=orderId;
  this.orderDispatchStatus =orderDispatchStatus;
  this.orderInitiateTime=orderInitiateTime;
  this.product=product;
}

}
export class User{
  userId: string;
  username: string;

  constructor(userId: string,username: string)
{
  this.userId=userId;
  this.username=username;

}
}