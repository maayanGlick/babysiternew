import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder, public auth: AuthService) { }
  ngOnInit() {
    // if(this.authservice.user)
    // this.user=this.authservice.user;
    this.myFormOnInit();
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    console.log("this", this.ionicForm.value.TypeUser);
    // if(this.ionicForm.value.TypeUser=='הורה')
    // {
    // this.ionicForm= this.formBuilder.group({
    //   ChildName: ['',  [Validators.required]]
    // })
    //   document.getElementById("t").classList.remove("t1");
    //   document.getElementById("t").classList.add("t2");
    // }

    if (!this.ionicForm.valid) {
      console.log('בבקשה הכנס את כל הנתונים!')
      return false;
    } else {
      this.auth.typeUser = this.ionicForm.value.TypeUser;
    // this.auth.validateEntrance(this.ionicForm.value.UserName, this.ionicForm.value.Password, this.ionicForm.value.ChildName);
      
        // if ( a==this.ionicForm.value.ChildName)
        this.auth.in(this.ionicForm.value.UserName, this.ionicForm.value.Password);
 
 
      

    }
  }
  myFormOnInit() {
    this.ionicForm = this.formBuilder.group({
      UserName: ['', [Validators.required, Validators.minLength(1)]],
      Password: ['', [Validators.required, Validators.minLength(1)]],
      TypeUser: [this.typeUser(), [Validators.required]],
      ChildName: [this.childName(), [Validators.required]]
    })
  }
  isActiveToggleTextPassword: Boolean = true;
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }
  typesUsers = ["הורה", "ילד"];




  // change(data) {
  //   console.log(data.detail.value, "hik");
  //   this.auth.typeUser = data.detail.value;
  // }
  typeUser() {
    if (this.auth.currentUser())
      return this.auth.currentTypeUser();
  }
  childName() {
    if (this.auth.currentUser())
      return JSON.parse(this.auth.currentUser()).ChildName;

  }

}
