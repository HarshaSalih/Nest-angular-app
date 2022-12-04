import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  Username=""
  Password=""

  readValues=()=>
  {
    let data:any={"Username":this.Username,"Password":this.Password}
    console.log(data)
    if (this.Username=="admin" && this.Password=="nest") {
      alert("valid login")
      
    } else {
      alert("invalid credential")
      
    }
  }




  

}
