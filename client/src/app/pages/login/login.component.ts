import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/authService';
import { LocalStorage } from '../../utils/local.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public username: string;
  public password: string;
  public authBy: string;
  public invalidPassword: boolean;

  constructor(public authService: AuthService, private router: Router, private localStorage: LocalStorage) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
  }

  ngOnInit() {
    this.authBy = 'ldap';
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }

  login(): void {
    if (this.authBy !== 'ldap') {
      this.invalidPassword = false;
      this.localStorage.remove('token');
      this.authService.getLocalUser(this.username, this.password).then(response => {
        if (response.success) {
          this.invalidPassword = false;
          this.localStorage.set('token', response.token);
          this.localStorage.setObject('user', response.user);
          this.router.navigate(['dashboard/users']);
        }else {
          this.invalidPassword = true;
        }
      });
    }else {
      this.authService.login(this.username, this.password).then(response => {
        if (response.success) {
          this.invalidPassword = false;
          this.localStorage.set('token', response.token);
          this.localStorage.setObject('user', response.user);
          this.router.navigate(['dashboard/users']);
        }else {
          this.invalidPassword = true;
        }
      });
    }
  }
}
