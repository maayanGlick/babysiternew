import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-setings',
  templateUrl: './setings.page.html',
  styleUrls: ['./setings.page.scss'],
})
export class SetingsPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myFormOnInit();
  }
  myFormOnInit() {
    this.ionicForm = this.formBuilder.group({
      sound: ["בינוני"],
      decibels: ["3"],
    })
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('בבקשה הכנס את כל הנתונים!')
      return false;
    } else {//
      console.log("מילאת");

    }
  }
}
