import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpService: HttpClient) { }

  public getList() {
    console.log("ins service get employees");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Product>("http://localhost:6565/products/GetList");
  }

  public AddItem() {
    console.log("ins service get employees");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Product>("http://localhost:6565/products/AddItem");
  }

}
export class Product {
   productid: String;
	 productUin: String;
  productispresent: boolean;
}

