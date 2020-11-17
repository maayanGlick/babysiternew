import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public auth: AuthService) { }
  @ViewChild('header', { static: true }) header: ElementRef;
  imgs = [
   '../../assets/img/home/6.jpg',
  '../../assets/img/home/7.jpg',

 '../../assets/img/home/8.jpg',

 '../../assets/img/home/9.jpg'
];
  userName: any = "שלום אורח";
  ngOnInit(): void {
  }
  

}
