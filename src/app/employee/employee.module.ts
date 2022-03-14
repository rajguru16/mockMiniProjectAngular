import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';

console.log('Employee module loads');

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeelistComponent,
    EmployeeDetailsComponent,
    UpdateComponent,
    EmployeeSearchComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class EmployeeModule {}
