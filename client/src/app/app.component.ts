import { Component } from '@angular/core';

import { CoreService } from './services/core.service';
import { AuthService } from './services/authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public coreService: CoreService, public authService: AuthService) { }

  ngOnInit(): void {
    
  }
}
