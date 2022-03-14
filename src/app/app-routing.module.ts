import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FallbackComponent } from './fallback/fallback.component';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { headerRoutes } from './header/header-routing.module';
import { CompanyRegisterComponent } from './company-register/company-register.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login/header',
    component:HeaderComponent,
    children:headerRoutes
  },
  {
    path:'login/register',
    component:RegisterComponent,
    
  },
  {
    path:'register/header',
    component:HeaderComponent
  },
  {
    path:'companyregister',
    component:CompanyRegisterComponent
  },
  {
    path:'login/companyregister',
    component:CompanyRegisterComponent,
    
  },
  {
    path:'**',
    component:FallbackComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
