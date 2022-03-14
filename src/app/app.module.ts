import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { EmployeeModule } from './employee/employee.module';
import { FallbackComponent } from './fallback/fallback.component';
import { CompanyModule } from './company/company.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { CompanyRegisterComponent } from './company-register/company-register.component';

console.log('app module loads')

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    FallbackComponent,
    LoginComponent,
    RegisterComponent,
    CompanyRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    HttpClientModule
    //commented for lazy loading
    // CompanyModule,
    // EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
