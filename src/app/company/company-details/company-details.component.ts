import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  constructor(private location: Location,private route:ActivatedRoute,private service:CommonService) {}

  ngOnInit(): void {
    this.getComapnyData()
  }

  getback() {
    this.location.back();
   
  }

  companyObj:Company

  getComapnyData(){
    //way 1: snapshot way works only once on the page it means it can take id and its info only once
    let companyId = parseInt(this.route.snapshot.paramMap.get('id'))
    
    this.service.getSingleCompanyData(companyId).subscribe((data:Company)=>{
      this.companyObj=data
    })
  

    //way 2: Observable way we can access data multiple time

    this.route.paramMap.subscribe(param1=>{
      this.service.getSingleCompanyData(parseInt(param1.get('id'))).subscribe((data)=>{
        this.companyObj =data
      })
    })


  }

}
