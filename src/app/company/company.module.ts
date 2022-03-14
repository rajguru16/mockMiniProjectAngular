import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';

console.log('Company module loads')

@NgModule({
  declarations: [
    CompanyComponent,
    CompanylistComponent,
    CompanyDetailsComponent,
    CompanyUpdateComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
