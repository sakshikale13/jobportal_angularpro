import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent as UserLoginComponent} from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { ApplyComponent } from './user/apply/apply.component';
import { ApplicationComponent } from './user/application/application.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OpeningsComponent as UserOpeningsComponent } from './openings/openings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './admin/login/login.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { OpeningComponent } from './admin/opening/opening.component';
import { CandidatesComponent } from './admin/candidates/candidates.component';
import { ApiService } from './api.service';
import { CookieService } from './cookie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OpeningsComponent } from './admin/openings/openings.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SignupComponent,
    ApplyComponent,
    ApplicationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    UserOpeningsComponent ,
    ContactUsComponent,
    LoginComponent,
    CompaniesComponent,
    OpeningComponent,
    CandidatesComponent,
    DashboardComponent,
    OpeningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


    
  ],
  providers: [ApiService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
