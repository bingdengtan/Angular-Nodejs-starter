import { Component, OnInit } from '@angular/core';

import { CoreService } from '../../services/core.service';
import { LocalStorage } from '../../utils/local.storage';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  title: string;
  user: any;

  constructor(public coreService: CoreService, public localStorage: LocalStorage) { }

  ngOnInit() {
    this.coreService.getAppConfig('app_name').then(response => {
      this.title = response;
    }).catch( e => {
      console.log(e);
    });

    this.user = this.localStorage.getObject('user');
  }

}
