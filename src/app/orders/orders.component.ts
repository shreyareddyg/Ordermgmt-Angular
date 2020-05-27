import { Component, OnInit} from '@angular/core';
import { Order, MyserviceService, products } from '../myservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  orderId: string;
  product :products[];
  expandedOrderId: string = "";

  
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): any {

let userId = localStorage.getItem("activeUser");
    this.myservice.getOrders(userId).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  delete(orderId: string): any {
    console.log("Ts order del test")
    this.myservice.removeOrder(orderId).subscribe(
      (result) => {

        if (result != null) {

           alert("Deleted Succesfully the  orderId: " + orderId);
          this.orders = this.orders.filter(order => order.orderId != orderId)
        }
      });
  }

  expandorders(orderId) {
    this.expandedOrderId = orderId;
  }

  isexpand(orderId) {
    if (orderId == this.expandedOrderId) {
      return true;
    }
    else {
      return false;
    }
  }
  handleSuccessfulResponse(response) {
    this.orders = response;
    console.log(response);
  }
}
