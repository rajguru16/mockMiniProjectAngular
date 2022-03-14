import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent implements OnInit {
  constructor(private service: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.getAllEmployeeData();
  }

  employeeData: Employee[];

  getAllEmployeeData() {
    this.service
      .getData()
      .subscribe((data: Employee[]) => (this.employeeData = data));
  }

  deleteEmployee(employee: Employee) {
    console.log('inside delete: ' + employee.ename);
    this.service.deleteData(employee.id).subscribe();
    window.location.reload();
  }

  nameSerach: string;
  isEmployeePresent: string=''; //if not present

  employeeSearch() {
    console.log('inside emp search ' + this.nameSerach);
    // this.employeeData

    this.employeeData.forEach((employee) => {
      if (
        this.nameSerach === employee.ename ||
        this.nameSerach === employee.designation ||
        this.nameSerach === employee.username
      ) {
        console.log('employee found ' + employee.id);
        this.router.navigate([
          'login',
          'header',
          'employee',
          'employeelist',
          'search',
          employee.id,
        ]);
      } else {
        this.isEmployeePresent="Sorry! given Employee is not present"
      }
    });
  }

  sortByName() {
    console.log('inside sort by name');

    this.compareName();
  }

  compareName() {
    let sorted = this.employeeData.sort((a: Employee, b: Employee) =>
      a.ename > b.ename ? 1 : -1
    );
    console.log(sorted);
    this.employeeData = sorted;
    console.log('sorted by name: ' + this.employeeData);
  }


}
