import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent {

  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  constructor(private api:ApiService){}


  readValues=()=>
  {
    let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)

    this.api.addFriends(data).subscribe(
      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert("Friend added successfully")

          this.name=""
          this.friendName=""
          this.DescribeYourFriend=""
          this.friendNickName=""
        }
        else
        {
          alert("Something went wrong")
        }
      }
    )
  }


}
