/**************************************************************
File: home.component.ts
Author: Adam Wilkins
Last Updated: 6/1/2025
Last to Update: Adam Wilkins
***************************************************************/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}