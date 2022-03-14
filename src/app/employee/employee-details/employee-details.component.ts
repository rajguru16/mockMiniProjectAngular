import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeObj: Employee;

  constructor(
    private location: Location,
    private service: CommonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Employee deails works');
    // snapshot method
    //let empid = parseInt(this.route.snapshot.paramMap.get('id'));

    // this.service
    //   .getSingleEmployee(empid)
    //   .subscribe((data: Employee) => (this.employeeObj = data));

    //observable method
    this.route.paramMap.subscribe(param1 => {
      this.service
        .getSingleEmployee(parseInt(param1.get('id')))
        .subscribe((data) => {this.employeeObj = data});
    });
  }

  getback() {
    this.location.back();
  }
}
