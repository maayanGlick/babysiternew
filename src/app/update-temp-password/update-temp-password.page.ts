import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../modals/User';
import { UserServiceService } from '../services/user-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'app-update-temp-password',
  templateUrl: './update-temp-password.page.html',
  styleUrls: ['./update-temp-password.page.scss'],
})
export class UpdateTempPasswordPage implements OnInit {

  @ViewChild('header', { static: true }) header: ElementRef;
  Tz: string;
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(private userservice: UserServiceService, private router: Router, public auth: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myFormOnInit();
  }
  update() {
    this.Tz = this.auth.tempCurrentTz;
    console.log(this.Tz, "tempCurrentTz");
    this.userservice.getUsertz(this.Tz).subscribe((user: User) => {
            user.Password = this.ionicForm.value.Password1;
            this.userservice.updateUser(user).subscribe((t: any) =>this.header.nativeElement.innerHTML = t);
            this.auth.in(user.UserName, user.Password);
            this.auth.tempCurrentTz = '';
        });
    
  }
  myFormOnInit() {

  //   this.ionicForm = new FormGroup({
  //     Password1: new FormControl(),
  //     Password2: new FormControl(),
  //     TempPassword: new FormControl()

  //  });
    this.ionicForm = this.formBuilder.group({
      Password1: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\u0590-\u05FF]{8,}$')]],
      Password2: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\u0590-\u05FF]{8,}$')]],
      TempPassword:['',[[Validators.required,'']]]
     
    })

  }
  check(){ this.ionicForm.value.Password1==this.ionicForm.value.Password2
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('בבקשה הכנס את כל הנתונים!')
      return false;
    } else {
     
     this.update()
      
    }
  }

  isActiveToggleTextPassword: Boolean = true;
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }
}
