import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../modals/User';
import { AuthService } from '../auth.service';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  @ViewChild('header', { static: true }) header: ElementRef;
 
  user: User = new User();
  
  constructor(private userService:UserServiceService,private router:Router,public authservice:AuthService) { }

  ngOnInit() {
   this.parseUser();
    
  }

  update(){
    this.userService.updateUser(this.user).subscribe((t:any)=>{
     console.log(t,"t");
     switch(t)
     {
       case 1:this.header.nativeElement.innerHTML="פרטיך עודכנו בהצלחה";break
       case 0:this.header.nativeElement.innerHTML="בשל בעיה הפרטים לא עודכנו";break;
     }
    });
  }
  parseUser(){
    var c:string=this.authservice.currentUser();
   
   this.user.Adress=   JSON.parse(c).Adress;
   this.user.BirthDate=   JSON.parse(c).BirthDate;
   this.user.City=   JSON.parse(c).City;
   this.user.Email=   JSON.parse(c).Email;
   this.user.FirstName=   JSON.parse(c).FirstName;
   this.user.LastName=   JSON.parse(c).LastName;
   this.user.Password=   JSON.parse(c).Password;
   this.user.Phone=   JSON.parse(c).Phone;
   this.user.ChildName=   JSON.parse(c).ChildName;
   this.user.Tz=   JSON.parse(c).Tz;
   this.user.UserName=   JSON.parse(c).UserName;
   return this.user;
  }
}
