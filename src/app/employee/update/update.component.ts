import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private service: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.CreateUpdateForm();
    this.editData();
  }

  updateForm: FormGroup;

  CreateUpdateForm() {
    this.updateForm = this.fb.group({
      id: [],
      ename: [''],
      email: [''],
      mobile: [''],
      designation: [''],
      username: [''],
      password: [''],
    });
  }

  goBack() {
    this.location.back();
  }

  editData() {
    let employeeObj: any = this.location.getState();
    console.log('inside update : ' + employeeObj.id);
    if (employeeObj.id != 0) {
      this.updateForm.get('id').setValue(employeeObj.id);
      this.updateForm.get('ename').setValue(employeeObj.ename);
      this.updateForm.get('email').setValue(employeeObj.email);
      this.updateForm.get('mobile').setValue(employeeObj.mobile);
      this.updateForm.get('designation').setValue(employeeObj.designation);
      this.updateForm.get('username').setValue(employeeObj.username);
      this.updateForm.get('password').setValue(employeeObj.password);
    }
  }

  onSubmit() {
    console.log('edit: ' + this.updateForm.value);
    this.service.updateEmployee(this.updateForm.value).subscribe();
    window.location.reload();
    this.router.navigate(['employeelist']); //optional
  }
}
