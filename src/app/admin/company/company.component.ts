import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: any;
      id:string | null = "0";
    

  constructor(private api:ApiService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // alert(this.id);
    if(this.id != "0")
    {
      let apiurl = "companies/get";
      let data = this.api.post(apiurl, { data: { id: this.id } });
      data.subscribe((mydata: any) => {
        this.companies = mydata.data;
        this.show();
      });
    }
    this.show();
  }
    show=()=>{
      this.companies= new FormGroup({
        id: new FormControl(this.companies == null ? "" : this.companies._id),
        companyid: new FormControl(this.companies == null ? "" : this.companies.companyid, Validators.compose([Validators.required])),
        name: new FormControl(this.companies == null ? "" : this.companies.name, Validators.compose([Validators.required])),
        address: new FormControl(this.companies == null ? "" : this.companies.address, Validators.compose([Validators.required])),
        city: new FormControl(this.companies == null ? "" : this.companies.city, Validators.compose([Validators.required])),
        
       
      });
    }
  
  submit = (companies: any) => {
    alert("hii")
    let apiurl = "companies/save";
    let data = this.api.post(apiurl, { data: companies});
    data.subscribe((mydata: any) => {
      this.router.navigate(["admin/companies"]);
    });
  }
}
