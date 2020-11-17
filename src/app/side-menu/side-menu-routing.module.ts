import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoGaurd } from '../autoGuard';
import { SliderComponent } from '../slider/slider.component';

import { SideMenuPage } from './side-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SideMenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../sign-up/sign-up.module').then(m => m.SignUpPageModule)
      },

      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'updateUser',
        loadChildren: () => import('../update-user/update-user.module').then(m => m.UpdateUserPageModule)
      },
      {
        path: 'updatePassword',
        loadChildren: () => import('../update-temp-password/update-temp-password.module').then(m => m.UpdateTempPasswordPageModule)
      },
      {
        path: 'forgot',
        loadChildren: () => import('../forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
      },
      {
        path: 'update-temp-password',
        loadChildren: () => import('../update-temp-password/update-temp-password.module').then( m => m.UpdateTempPasswordPageModule)
      },
      {
        path: 'zoom',canActivate:[AutoGaurd],
        loadChildren: () => import('../zoom/zoom.module').then( m => m.ZoomPageModule)
      },
      {
        path: 'noti',
        loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../setings/setings.module').then( m => m.SetingsPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'slide',
        component:SliderComponent
      }
      ,
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideMenuPageRoutingModule {}
