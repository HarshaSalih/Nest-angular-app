import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent {

  employeeId=""
  firstName=""
  lastName=""
  houseNo=""
  houseName=""
  streetName=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentName=""
  gender=""
  highestDegree=""
  yearOfExperience=""
  dateOfJoining=""
  username=""
  password=""
  confirmPassword=""

  constructor(private route:Router){}


  readValues=()=>
  {
    let data:any={"employeeId":this.employeeId,"firstName":this.firstName,"lastName":this.lastName,"houseNo":this.houseName,"streetName":this.streetName,"pincode":this.pincode,"district":this.district,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,"parentName":this.parentName,"gender":this.gender,"highesrDegree":this.highestDegree,"yearOfExperience":this.yearOfExperience,"dateOfJoining":this.dateOfJoining,"userName":this.username,"password":this.password,"confirmPassword":this.confirmPassword}
      
    console.log(data)

    if (this.password==this.confirmPassword) {
      // alert("registered successfully")
      this.route.navigate (['/employeelogin'])
      
    } else {
      alert("password and confirm password doesn't match")
      
    }


}
}
