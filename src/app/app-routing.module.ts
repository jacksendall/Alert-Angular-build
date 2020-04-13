import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AccountManagementComponent } from './account-management/account-management.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'account-management',
    component: AccountManagementComponent
  },

  //otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
