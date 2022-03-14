import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from '../employee/update/update.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { CompanyComponent } from './company/company.component';
import { CompanylistComponent } from './companylist/companylist.component';

const routes: Routes = [
  {
    path:'',
     component:CompanyComponent,
      children:[
     {
       path:'companylist',
       component:CompanylistComponent,
       children:[
         {
           path:'companylist/companyDetails/:id',
           component:CompanyDetailsComponent
         },
         {
           path:'companyupdate',
           component:CompanyUpdateComponent
         }
       ]
     }

     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
