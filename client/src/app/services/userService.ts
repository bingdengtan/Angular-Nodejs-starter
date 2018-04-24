import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

import { CoreUtils } from '../utils/core.utils';

@Injectable()
export class UserService {
    serverPortNumber = environment.serverPort;
    resetUrl = '/user';
    constructor(public http: Http, public coreUtils: CoreUtils) {
        this.resetUrl = coreUtils.getAppHostName() + ':' + this.serverPortNumber + this.resetUrl;
    }

    getUsers(): Promise<any> {
        return new Promise((resolve, reject) => {
          this.http.get(this.resetUrl + '/list')
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
