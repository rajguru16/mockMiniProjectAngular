import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    children:[
      {
        path:'employeelist',
        component:EmployeelistComponent,
        children:[
          {
            path:'employeedetails/:id', //:id denoted value
            component:EmployeeDetailsComponent
          },
          {
            path:'update',
            component:UpdateComponent
          },
          {
            path:'search/:id',
            component:EmployeeSearchComponent
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
export class EmployeeRoutingModule { }
