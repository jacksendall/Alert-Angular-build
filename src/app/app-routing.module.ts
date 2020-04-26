import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'Fader' } },
  {path: 'about', component: AboutComponent},
  {path: 'pricing', component: PricingComponent, data: { animation: 'Fade' } },
  {path: 'account-management', component: AccountManagementComponent, data: { animation: 'Fade' } },
  {path: 'contact', component: ContactComponent, data: { animation: 'Fade' } },
  //otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
