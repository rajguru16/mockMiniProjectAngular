import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { Employee } from '../model/employee';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder,public router:Router,private service:CommonService) { }

  employeeData:Employee[]

  ngOnInit(): void {
    this.createLoginForm()
    this.getAllEmployeeData()
    this.getAllCompanyData()
    console.log('employee data: '+this.employeeData)
  }

  companyData:Company[]

  getAllCompanyData(){
    this.service.getComapanyData().subscribe((data:Company[])=>
      this.companyData=data
    )
  }


  getAllEmployeeData()
  {
    this.service.getData().subscribe((data:Employee[])=>
        this.employeeData=data
       
    )
  }


  loginForm:FormGroup


  createLoginForm(){
      this.loginForm=this.fb.group({
        userName :['',[Validators.required]],
        password :['',[Validators.required]]
      })
  }

  onLoginSubmit(){
    if(this.loginForm.valid){

      //uname = this.loginForm.get('userName').value()

      this.employeeData.forEach(employee => {
        if(employee.username === this.loginForm.get('userName').value &&
            employee.password === this.loginForm.get('password').value){
              console.log('welcome valued customer!!')
              this.router.navigate(['login/header'])
        }
      });

    }
  }


  companylogin(){
    if(this.loginForm.valid){
     this.companyData.forEach(company => {
       if(company.cusername===this.loginForm.get('userName').value &&
       company.cusername===this.loginForm.get('password').value){
        console.log('welcome valued company customer!!')
        this.router.navigate(['login/header'])
       }
     });
    }
  }



}
