/**************************************************************
File: app.component.ts
Author: Adam Wilkins
Last Updated: 9/25/2025
Last to Update: Adam Wilkins
***************************************************************/


import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{

  /*********************************************************************************/

  constructor(private router: Router) {}

  /*********************************************************************************/



  /* Closes hamburger menu if its open */
  closeMenu(menuToggle: HTMLInputElement) {
    menuToggle.checked = false;
  }

  /*********************************************************************************/
}