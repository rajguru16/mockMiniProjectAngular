import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  constructor(private service:CommonService) { }

  ngOnInit(): void {
    this.getAllCompanyList()
  }

  companyList:Company[]

  getAllCompanyList(){
    this.service.getComapanyData().subscribe((data:Company[])=>
      this.companyList=data
    )
  }

  delete(company:Company){
    this.service.deleteCompanyData(company.id).subscribe();
    window.location.reload()
  }



}
