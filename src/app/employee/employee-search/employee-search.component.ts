import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css'],
})
export class EmployeeSearchComponent implements OnInit {
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private service: CommonService
  ) {}

  ngOnInit(): void {
    this.getSearchResult();
  }

  getback() {
    this.location.back();
  }

  employeeObj: Employee = {
    designation: '',
    id: 0,
    email: '',
    ename: '',
    mobile: '',
    password: '',
    username: '',
  };

  getSearchResult() {
    this.route.paramMap.subscribe((param1) => {
      this.service
        .getSingleEmployee(parseInt(param1.get('id')))
        .subscribe((data: Employee) => (this.employeeObj = data));
    });
  }
}
