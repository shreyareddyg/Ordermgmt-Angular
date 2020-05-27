import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "order management";

  activeUser: any;
  users: any[] = [];
  unselectedUsers: any[] = [];
  
  constructor(private _myservice: MyserviceService) { }
  ngOnInit() {
    this._myservice.getCustomers().subscribe(response => {
      response.forEach((i) => {
        this.users.push(i);
      });
   
        this.activeUser = this.users[0];
      localStorage.setItem("activeUser", this.activeUser.userId);
      console.log(localStorage.getItem("activeUser"));
      this.users
        .filter((i) => i.userId != this.activeUser.userId)
        .forEach((i) => {
          this.unselectedUsers.push(i);
        });
        console.log(this.unselectedUsers);
      console.log(response);
     
    });
      }
      

  selectedUser(selectedUser) {
    localStorage.setItem("activeUser", selectedUser.userId);
    this.activeUser = selectedUser;
    console.log(selectedUser);
    this.unselectedUsers = [];
    
    this.unselectedUsers = this.users.filter((i) => i.userId != this.activeUser.userId);
   
    console.log(this.unselectedUsers);
  }
}

