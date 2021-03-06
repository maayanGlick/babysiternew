import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController,public authservice:AuthService) { }

  ngOnInit() {}
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  openEnd() {
    this.menu.open('end');
  }
  
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
