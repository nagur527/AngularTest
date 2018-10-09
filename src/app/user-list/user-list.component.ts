import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  constructor(private userService: UserService, private route: Router) {
    this.userService.getUsersList().subscribe((response) => {
      console.log(response.json());
      this.users = response.json();
    })
  }
  gotoUserDetails(user) {
    this.route.navigate(['/user', user]);
  }
  ngOnInit() {
  }

}
