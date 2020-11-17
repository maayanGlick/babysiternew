import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { mainModule } from 'process';
import { stringify } from 'querystring';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  @ViewChild('header', { static: true }) header: ElementRef;
  message: string;
  Tz:string;
  constructor( private http: HttpClient, private router: Router,private auth:AuthService,private userService:UserServiceService) { }

  ngOnInit(): void {
  }
  onSubmit() {
     var message = '';
    this.http.get(`${environment.apiEmail}/Get/${this.Tz}`).subscribe(
       (t:any)=>
       {
         switch(t)
         {
           case 1:
             this.auth.tempCurrentTz=this.Tz;
             this.auth.mail();
            this.router.navigate(['/sideMenu/updatePassword']);
          
            break
           case 0:message="לא נמצא";break;
         }
         console.log(t);
        this.header.nativeElement.innerHTML=message; 
      });
    }
    

}
