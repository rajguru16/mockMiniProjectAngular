import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css'],
})
export class CompanyUpdateComponent implements OnInit {
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private service: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createUpdateForm();
    this.editData();
  }

  goBack() {
    this.location.back();
  }

  updateForm: FormGroup;

  createUpdateForm() {
    this.updateForm = this.fb.group({
      id: [],
      cname: [''],
      cemail: [''],
      cmobile: [''],
      clocation: [''],
      cusername: [''],
      cpassword: [''],
    });
  }

  editData() {
    let companyObj: any = this.location.getState();
    console.log('inside update : ' + companyObj.id);
    if (companyObj.id != 0) {
      this.updateForm.get('id').setValue(companyObj.id),
        this.updateForm.get('cname').setValue(companyObj.cname),
        this.updateForm.get('cemail').setValue(companyObj.cemail),
        this.updateForm.get('cmobile').setValue(companyObj.cmobile),
        this.updateForm.get('clocation').setValue(companyObj.clocation),
        this.updateForm.get('cusername').setValue(companyObj.cusername),
        this.updateForm.get('cpassword').setValue(companyObj.cpassword);
    }
  }

  onSubmit() {
    this.service.updateCompany(this.updateForm.value).subscribe();
    window.location.reload();
    //this.router.navigate(['companylist']);
  }
}
