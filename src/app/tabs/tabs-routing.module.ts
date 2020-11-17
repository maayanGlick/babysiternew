import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
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
        loadChildren: () => import('../update-user/update-user.module').then(m => m.UpdateUserPageModule)
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
        path: 'parent',
        loadChildren: () => import('../parent/parent.module').then( m => m.ParentPageModule)
      },
      {
        path: 'child',
        loadChildren: () => import('../child/child.module').then( m => m.ChildPageModule)
      },
      {
        path: 'zoom',
        loadChildren: () => import('../zoom/zoom.module').then( m => m.ZoomPageModule)
      },
      {
        path: 'noti',
        loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule)
      },{
        path: 'slide',
        component:SliderComponent
      },
      {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
