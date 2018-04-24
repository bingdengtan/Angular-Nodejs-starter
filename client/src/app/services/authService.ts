import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

import { CoreUtils } from '../utils/core.utils';
import { LocalStorage } from '../utils/local.storage';

@Injectable()
export class AuthService {
    constructor(public http: Http, public localStorage: LocalStorage, public coreUtils: CoreUtils) {

    }

    isAuthorized(): Promise<any> {
        return new Promise((resolve, reject) => {
          let token = this.localStorage.get('token');
          if (!token) {
            resolve(false);
          } else {
            this.http.get(environment.authServer + 'api/validToken?token=' + token)
                .toPromise()
                .then( response => {
                    resolve(response.json().valid);
                })
                .catch(e => {
                    reject(e);
                });
          }
        });
    }

    getLoginUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    login(username: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let user = {username: username, password: password};
            this.http.post(environment.authServer + 'login', user)
                .toPromise()
                .then( response => {
                    resolve(response.json());
                })
                .catch(e => {
                    reject(e);
                });
        });
    }
}
