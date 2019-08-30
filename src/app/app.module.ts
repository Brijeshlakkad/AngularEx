import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { HighchartComponent } from './highchart/highchart.component';
import { Highchart2Component } from './highchart2/highchart2.component';
import { Highchart3Component } from './highchart3/highchart3.component';
import { Rgraph1Component } from './rgraph1/rgraph1.component';
import { Rgraph2Component } from './rgraph2/rgraph2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    HighchartComponent,
    Highchart2Component,
    Highchart3Component,
    Rgraph1Component,
    Rgraph2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
