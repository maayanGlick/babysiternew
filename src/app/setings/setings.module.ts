import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetingsPageRoutingModule } from './setings-routing.module';

import { SetingsPage } from './setings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SetingsPageRoutingModule
  ],
  declarations: [SetingsPage]
})
export class SetingsPageModule {}
