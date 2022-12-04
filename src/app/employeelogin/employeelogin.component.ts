import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {

  Employee_id=""
  Password=""

  constructor(private route:Router){}

  readValues=()=>
  {
    let data:any={"Employee id":this.Employee_id,"Password":this.Password}
    console.log(data)

    if (this.Employee_id=="1122" && this.Password=="12345") {
      // alert("valid login")
      this.route.navigate(['addcourse'])
      
    } else {
      alert("invalid credential")
      
    }
  }



}
