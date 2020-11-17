import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTempPasswordPageRoutingModule } from './update-temp-password-routing.module';

import { UpdateTempPasswordPage } from './update-temp-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateTempPasswordPageRoutingModule
  ],
  declarations: [UpdateTempPasswordPage]
})
export class UpdateTempPasswordPageModule {}
