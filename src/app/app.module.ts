import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { HttpClientModule }  from '@angular/common/http';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component'
import { FormsModule } from '@angular/forms';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    ViewcoursesComponent,
    ViewfriendsComponent,
    EmployeeloginComponent,
    EmployeeregistrationComponent,
    AddcoursesComponent,
    AddfriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
