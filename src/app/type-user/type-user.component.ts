import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-type-user',
  templateUrl: './type-user.component.html',
  styleUrls: ['./type-user.component.scss'],
})
export class TypeUserComponent implements OnInit {
  typesUsers = ["הורה", "ילד"];
  
  constructor(private auth: AuthService) { }

  ngOnInit() { }

  change(data) {
    console.log(data.detail.value, "hik");
    this.auth.typeUser = data.detail.value;
  }

}
