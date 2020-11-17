import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTempPasswordPage } from './update-temp-password.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTempPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTempPasswordPageRoutingModule {}
