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
import { RouterModule, Routes } from '@angular/router';
import { AddnavbarComponent } from './addnavbar/addnavbar.component';
import { ViewnavbarComponent } from './viewnavbar/viewnavbar.component';
import { NavbarComponent } from './navbar/navbar.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },

  {
    path:"viewcourse",
    component:ViewcoursesComponent
  },

  {
    path:"viewfriend",
    component:ViewfriendsComponent
  },


  {
    path:"employeelogin",
    component:EmployeeloginComponent
  },

  {
    path:"employeeregistration",
    component:EmployeeregistrationComponent
  },

  {
    path:"addcourse",
    component:AddcoursesComponent
  },

  {
    path:"addfriend",
    component:AddfriendsComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    ViewcoursesComponent,
    ViewfriendsComponent,
    EmployeeloginComponent,
    EmployeeregistrationComponent,
    AddcoursesComponent,
    AddfriendsComponent,
    AddnavbarComponent,
    ViewnavbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
