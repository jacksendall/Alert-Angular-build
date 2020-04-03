import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cont1Component } from './cont1/cont1.component';
import { Cont2Component } from './cont2/cont2.component';
import { Cont3Component } from './cont3/cont3.component';

@NgModule({
  declarations: [
    AppComponent,
    Cont1Component,
    Cont2Component,
    Cont3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
