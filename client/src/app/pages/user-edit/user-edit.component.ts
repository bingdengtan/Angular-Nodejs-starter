import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/userService';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  username: string;
  password: string;
  location: string;
  email: string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
  }

  cancel(): void {
    this.router.navigate(['dashboard/users']);
  }

  save(): void {
    let user = {username: this.username, password: this.password, location: this.location, email: this.email};
    this.userService.saveUser(user).then(response => {
      if (response.success) {
        this.router.navigate(['dashboard/users']);
      }
    });
  }
}
