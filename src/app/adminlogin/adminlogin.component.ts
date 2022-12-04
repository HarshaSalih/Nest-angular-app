import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  Username=""
  Password=""

  constructor(private route:Router){}

  readValues=()=>
  {
    let data:any={"Username":this.Username,"Password":this.Password}
    console.log(data)
    if (this.Username=="admin" && this.Password=="nest") {
      // alert("valid login")
      this.route.navigate(['viewcourse'])
    } else {
      alert("invalid credential")
      
    }
  }




  

}
