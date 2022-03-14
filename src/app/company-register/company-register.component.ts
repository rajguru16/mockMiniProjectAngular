import { Location } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css'],
})
export class CompanyRegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private service: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.companyRegForm();
  }

  isCompanyCreated: String = ''; //flag to check weather company is created or not

  registerForm: FormGroup;

  companyRegForm() {
    this.registerForm = this.fb.group({
      cname: [''],
      cemail: [''],
      cusername: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
      cmobile: [''],
      clocation: [''],
    });
  }

  onSubmit() {
    console.log('company reg: ' + this.registerForm.value);
    this.service.saveCompanyData(this.registerForm.value).subscribe();
    this.isCompanyCreated = 'Company Registered Successfully!';
    console.log(this.isCompanyCreated);
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 3000);
  }

  goBack() {
    this.location.back();
  }
}
