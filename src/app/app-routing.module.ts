import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { HighchartComponent } from './highchart/highchart.component';
import { Highchart2Component } from './highchart2/highchart2.component';
import { Highchart3Component } from './highchart3/highchart3.component';
import { Rgraph1Component } from './rgraph1/rgraph1.component';
import { Rgraph2Component } from './rgraph2/rgraph2.component';

const routes: Routes = [
  { path: "", component: LoginComponent, data: { sidebar: false, header: false } },
  { path: "login", component: LoginComponent, data: { sidebar: false, header: false } },
  { path: "register", component: RegistrationComponent, data: { sidebar: false, header: false } },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], data: { sidebar: true, header: true }
  },
  { path: "dashboard/highchart1", component: HighchartComponent, canActivate: [AuthGuard], data: { sidebar: true, header: true } },
  { path: "dashboard/highchart2", component: Highchart2Component, canActivate: [AuthGuard], data: { sidebar: true, header: true } },
  { path: "dashboard/highchart3", component: Highchart3Component, canActivate: [AuthGuard], data: { sidebar: true, header: true } },
  { path: "dashboard/rgraph1", component: Rgraph1Component, canActivate: [AuthGuard], data: { sidebar: true, header: true } },
  { path: "dashboard/rgraph2", component: Rgraph2Component, canActivate: [AuthGuard], data: { sidebar: true, header: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
