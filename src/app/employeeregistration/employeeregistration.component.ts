import { Component } from '@angular/core';

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


  readValues=()=>
  {
    let data:any={"employeeId":this.employeeId,"firstName":this.firstName,"lastName":this.lastName,"houseNo":this.houseName,"streetName":this.streetName,"pincode":this.pincode,"district":this.dateOfJoining,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,"parentName":this.parentName,"gender":this.gender,"highesrDegree":this.highestDegree,"yearOfExperience":this.yearOfExperience,"dateOfJoining":this.dateOfJoining,"userName":this.username,"password":this.password,"confirmPassword":this.confirmPassword}
      
    console.log(data)

    if (this.password==this.confirmPassword) {
      alert("registered successfully")
      
    } else {
      alert("password and confirm password doesn't match")
      
    }


}
}
