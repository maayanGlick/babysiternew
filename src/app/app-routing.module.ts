import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: 'sideMenu',
     loadChildren: () => import('./side-menu/side-menu.module').then( m => m.SideMenuPageModule)
   },
  {
    path: '',
    loadChildren: () => import('./side-menu/side-menu.module').then(m => m.SideMenuPageModule)
  },
  {
    path: 'setings',
    loadChildren: () => import('./setings/setings.module').then( m => m.SetingsPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
