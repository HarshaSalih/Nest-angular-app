import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { HttpClientModule }  from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    ViewcoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
