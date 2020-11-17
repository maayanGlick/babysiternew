import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public authservice: AuthService,private menuController:MenuComponent) {}
}
