import { Component, OnInit } from '@angular/core';
import { useAnimation, transition, trigger, style, animate } from '@angular/animations';
import { transAnimation } from './animations';


    
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
 
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
