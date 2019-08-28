import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path: "", component: LoginComponent, data: { sidebar: false, header: false } },
  { path: "login", component: LoginComponent, data: { sidebar: false, header: false } },
  { path: "register", component: RegistrationComponent, data: { sidebar: false, header: false } },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], data: { sidebar: true, header: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
