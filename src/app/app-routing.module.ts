import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cont3Component } from './cont3/cont3.component';
import { Cont2Component } from './cont2/cont2.component';
import { Cont1Component } from './cont1/cont1.component';


const routes: Routes = [
  {
    path: 'home',
    component: Cont1Component
  },
  {
    path: 'about',
    component: Cont2Component
  },
  {
    path: 'services',
    component: Cont3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
