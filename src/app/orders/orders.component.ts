import { Component, OnInit } from '@angular/core';
import { Order, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: Order [];
orderId: String;
  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.myservice.getAllOrders().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }


  handleSuccessfulResponse(response) {
    this.orders = response;
    console.log(response);
  }
}
