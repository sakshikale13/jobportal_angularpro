import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-add-opening',
  templateUrl: './add-opening.component.html',
  styleUrls: ['./add-opening.component.css']
})
export class AddOpeningComponent implements OnInit {

     job_openings: any;
      id:string | null = "0";
    
      constructor(private api:ApiService, private cookie: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
      }
    
  
      ngOnInit(): void {
       
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        // alert(this.id);
        if(this.id != "0")
        {
          let apiurl = "openings/get";
          let data = this.api.post(apiurl, { data: { id: this.id } });
          data.subscribe((mydata: any) => {
            this.job_openings = mydata.data;
            this.show();
          });
        }
        this.show();
      }
    
      show = ()=>{
        this.job_openings = new FormGroup({
          id: new FormControl(this.job_openings == null ? "" : this.job_openings._id),
          companyid: new FormControl(this.job_openings == null ? "" : this.job_openings.companyid, Validators.compose([Validators.required])),
          position: new FormControl(this.job_openings == null ? "" : this.job_openings.position, Validators.compose([Validators.required])),
          description: new FormControl(this.job_openings == null ? "" : this.job_openings.description, Validators.compose([Validators.required])),
          city: new FormControl(this.job_openings == null ? "" : this.job_openings.city, Validators.compose([Validators.required])),
          openingdate: new FormControl(this.job_openings == null ? "" : this.job_openings.openingdate, Validators.compose([Validators.required])),
          closingdate: new FormControl(this.job_openings == null ? "" : this.job_openings.closingdate, Validators.compose([Validators.required])),
        
         
        });
      }
    
      submit = (job_openings: any) => {
        alert("hii")
        let apiurl = "openings/save";
        let data = this.api.post(apiurl, { data: job_openings });
        data.subscribe((mydata: any) => {
          this.router.navigate(["/admin/openings"]);
        });
      }
    }
    