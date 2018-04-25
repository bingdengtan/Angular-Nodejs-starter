import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { FundComponent } from '../pages/fund/fund.component';
import { StockComponent } from '../pages/stock/stock.component';
import { LoginComponent } from '../pages/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';
import { UserEditComponent } from '../pages/user-edit/user-edit.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent,
        children: [
          { path: 'todo', component: HomeComponent },
          { path: 'myapp', component: FundComponent },
          { path: 'users', component: UserComponent },
          { path: 'edituser', component: UserEditComponent }
        ]
      }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {}
