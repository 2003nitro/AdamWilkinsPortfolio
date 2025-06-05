/**************************************************************
File: app.component.ts
Author: Adam Wilkins
Last Updated: 6/1/2025
Last to Update: Adam Wilkins
***************************************************************/

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

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
export class AppComponent {}
