import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { ApiService } from 'src/app/api.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;

  constructor(private router: Router, private api: ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.user = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))


    })

  }
  submit = (user: any) => {

    // this.router.navigate(["/admin/dashboard"]);
    let apiurl = "/admin/login";
    let data = this.api.post(apiurl,
      {
        data: user
      });
    data.subscribe((mydata: any) => {
      console.log(mydata);
      console.log(data);


      if (mydata.data.status == "success") {
        this.cookie.set("usertype", "admins");
        this.cookie.set("adminid",mydata.data.id);
        this.cookie.set("name",mydata.data.name);
        this.cookie.set("authkey", mydata.data.authkey);
        this.router.navigate(["/admin/dashboard"]);

      }
      else {
        alert("invalid email or password")
      }
    });


  }
}