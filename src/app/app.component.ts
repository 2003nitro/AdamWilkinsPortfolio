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

export class AppComponent implements OnInit {

  /*********************************************************************************/

  constructor(private router: Router) {}

  /*********************************************************************************/

  /* Detects website visits and sends data to Cloudflare Worker */
  ngOnInit() {

    /* Sends visit on initial load */
    this.sendVisit();

    /* Sends visit on route change (Angular navigation) */
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.sendVisit();
      });
  }

  /*********************************************************************************/

  /* Sends visit data to Cloudflare Worker */
  private sendVisit() {
    fetch("https://YOUR-WORKER-URL.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page: window.location.href,
        referrer: document.referrer || "Direct"
      })
    }).catch(err => console.error("Worker call failed:", err));
  }

  /*********************************************************************************/

  /* Closes hamburger menu if its open */
  closeMenu(menuToggle: HTMLInputElement) {
    menuToggle.checked = false;
  }

  /*********************************************************************************/
}