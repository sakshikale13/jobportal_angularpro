import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  LoginComponent as UserLoginComponent } from './user/login/login.component';
import { OpeningsComponent as UserOpeningsComponent } from './openings/openings.component';
import { ApplyComponent } from './user/apply/apply.component';
import { ApplicationComponent } from './user/application/application.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './admin/login/login.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { OpeningComponent } from './admin/opening/opening.component';

import { CandidatesComponent } from './admin/candidates/candidates.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OpeningsComponent } from './admin/openings/openings.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"user/login",component:UserLoginComponent},
  {path:"user/openings",component:UserOpeningsComponent},
  {path:"apply",component:ApplyComponent},
  {path:"application",component:ApplicationComponent},
  {path:"signup",component:SignupComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"admin/login",component:LoginComponent},
  {path:"admin/companies",component:CompaniesComponent},
  {path:"admin/opening",component:OpeningComponent},
 {path:"admin/openings",component:OpeningsComponent},
  {path:"admin/candidates",component:CandidatesComponent},
  {path:"admin/dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
