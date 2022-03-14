import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb:FormBuilder,public location:Location,private service:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.createRegistration()
  }


  registerForm:FormGroup


  createRegistration(){
    this.registerForm=this.fb.group({
      id:[],
      ename:[''],
      email:[''],
      mobile:[''],
      designation:[''],
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }


  onSubmit(){
      if(this.registerForm.valid){
        this.service.saveData(this.registerForm.value).subscribe();
        //this.router.navigate(['register/header'])
        this.router.navigate(['login'])
      }
     
  }

  goBack(){
      this.location.back()
  }


}
