import { Component, NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { Fader } from './route-animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    AccountManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
      { path: 'home', component: HomeComponent, data: {animation: 'Fader'} },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
      { path: 'pricing', component: PricingComponent, data: {animation: 'PricingPage'} }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
