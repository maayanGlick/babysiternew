import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../modals/User';
import { UserServiceService } from '../services/user-service.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  @ViewChild('header', { static: true }) header: ElementRef;
  user: User = new User();
  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  verificationPPassword = '';
  constructor(private userService: UserServiceService, private router: Router, public authservice: AuthService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    // if(this.authservice.user)
    // this.user=this.authservice.user;
    this.myFormOnInit();
  }

  checkPassword() {
    // console.log(verificationPassword, this.user.Password);
    if (this.verificationPPassword == this.user.Password)
      this.saveuser();
    // else
    //   alert("אשר את סיסמתך פעם נוספת");
  }

  saveuser() {
    var msg = this.authservice.validUserNameAndPassword(this.user.Password, this.user.UserName);
    if (msg == true) {
      this.userService.SaveUser(this.user).subscribe((t: any) => {
        console.log(t, "t")
        switch (t) {
          case 1: this.header.nativeElement.innerHTML = "ברוך הבא " + this.user.FirstName; setTimeout(() => { this.authservice.in(this.user.UserName, this.user.Password); }, 2000); break;
          case 0: this.header.nativeElement.innerHTML = "אחד מהנתונים שגויים"; break;
        }
      });
    }
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('Birthdate').setValue(date, {
      onlyself: true
    })
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
      this.user = this.ionicForm.value;
      console.log(this.ionicForm.value);
      this.checkPassword();
    }
  }
  myFormOnInit() {
    this.ionicForm = this.formBuilder.group({
      Tz: [''],
      FirstName: [''],
      LastName: [''],
      // [Validators.required, Validators.minLength(2)]
      BirthDate: [this.defaultDate],
      Adress: [''],
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      UserName: [''],
      Password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9\u0590-\u05FF]{8,}$')]],

      ChildName: [''],
      City: ['']
    })

  }
  verificationPassword(e) {
    this.verificationPPassword = e.target.value;
  }
  isActiveToggleTextPassword: Boolean = true;
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }
}
