import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path:'',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'assets',
        loadChildren: () => import('./assets/assets.module').then( m => m.AssetsPageModule)
      },
      {
        path: 'listing',
        loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
