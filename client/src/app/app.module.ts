import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './router/app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { AppFooterComponent } from './component/app-footer/app-footer.component';
import { AppLeftSideComponent } from './component/app-left-side/app-left-side.component';
import { AppControlSidebarComponent } from './component/app-control-sidebar/app-control-sidebar.component';

import { FundComponent } from './pages/fund/fund.component';
import { StockComponent } from './pages/stock/stock.component';
import { GridComponent } from './component/grid/grid.component';
import { CompanyService } from './services/companyService';
import { CoreService } from './services/core.service';
import { FundService } from './services/fundService';
import { FundStockService } from './services/fundStockService';
import { StockService } from './services/stockService';
import { UserService } from './services/userService';
import { AuthService } from './services/authService';
import { CoreUtils } from './utils/core.utils';
import { LocalStorage } from './utils/local.storage';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppLeftSideComponent,
    AppControlSidebarComponent,
    FundComponent,
    StockComponent,
    GridComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    NgbModule.forRoot(),
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CompanyService,
    FundService,
    StockService,
    FundStockService,
    UserService,
    CoreService,
    CoreUtils,
    AuthService,
    LocalStorage,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
