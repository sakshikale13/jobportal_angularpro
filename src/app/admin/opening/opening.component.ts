import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent implements OnInit {

  
  
  job_openings:any;
  
    constructor(private api:ApiService, private cookie:CookieService, private router: Router) {
    }
  
    ngOnInit(): void {
      this.list();
    }
  
    list()
    {
      let apiurl = "openings/list";
      let data = this.api.post(apiurl, {});
      data.subscribe((mydata: any) => {
        this.job_openings= mydata.data;
        console.log(this.job_openings);
      });
    }
  
    delete(id:string)
    {
      if(confirm("Sure to delete?"))
      {
        let apiurl = "openings/delete";
      let data = this.api.post(apiurl, {data:{id:id}});
      data.subscribe((mydata: any) => {
        this.list();
      });
      }
    }
  
  }