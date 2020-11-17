import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {
  @ViewChild('header', { static: true }) header: ElementRef;
  public selectedIndex = 0;
  dark = false;

  appPages = [
    {
      title: 'דף הבית',
      url: '/sideMenu/home',
      icon: 'home'
    },
    {
      title: 'אודות',
      url: '/sideMenu/about',
      icon: 'information-circle'
    }
  ];

  public arr = [
    {
      url: '/sideMenu/login',
      if:!this.isIn(),
      icon: 'log-in-outline',
      label: 'הכנס'
    },
    {
      url: '/sideMenu/updateUser',
      if:this.isIn(),
      icon: 'create-outline',
      label: 'עדכן'
    },
    {
      url: '/sideMenu/signup',
      if:!this.isIn(),
      icon: 'person-add-outline',
      label: 'הרשם'
    },
    {
      url: '/sideMenu/home',
      if:true,
      icon: 'home-outline',
      label: 'בית'
    },
  ];
  constructor(public auth: AuthService) { }

  ngOnInit() {
    
    console.log(this.isIn(),'a',!this.isIn(),'b');
  }
  isIn(){
    if(localStorage.getItem('currentUser')!=null)
    return true;
    return false;
  }
  
  helloUser() {
    var currentUser = this.auth.currentUser();
    if (currentUser != null)
      this.header.nativeElement.innerHTML = "שלום " + JSON.parse(currentUser).FirstName;


  }

}
