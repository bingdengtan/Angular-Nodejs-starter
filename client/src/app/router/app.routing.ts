import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { FundComponent } from '../pages/fund/fund.component';
import { StockComponent } from '../pages/stock/stock.component';
import { LoginComponent } from '../pages/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent,
        children: [
          { path: 'companies', component: HomeComponent },
          { path: 'funds', component: FundComponent },
          { path: 'stock', component: StockComponent }
        ]
      }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {}
