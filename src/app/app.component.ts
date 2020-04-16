import { Component } from '@angular/core';
import { RouterOutlet, OutletContext } from '@angular/router';
import { Fader } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Fader
  ]
})
export class AppComponent {
  title = 'Alert Trading | Forex Strategy Signlas Course';
  
 prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}

