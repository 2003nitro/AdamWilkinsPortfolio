/**************************************************************
File: contact.component.ts
Author: Adam Wilkins
Last Updated: 10/5/2025
Last to Update: Adam Wilkins
***************************************************************/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactName: string       = 'Adam Wilkins';
  contactEmail: string      = 'adamwilkins012@gmail.com';
  contactPhone: string      = '+1 (727) 267-9988';
  contactAddress: string    = '136 Central St, North Reading, Massachusetts, 01864';

  /*********************************************************************************/
  // Output: phone link
  // Input: NONE
  get phoneLink(): string {
    const digits = this.contactPhone.replace(/\D+/g, '');
    return `tel:${digits}`;
  }
  /*********************************************************************************/

  /*********************************************************************************/
  /*  List of social media links */
  socialLinks = [
    { href: 'https://snhu.joinhandshake.com/profiles/8u24ws',  label: 'Handshake',  icon: '🤝' },
    { href: 'https://www.linkedin.com/in/adam-wilkins012/', label: 'LinkedIn', icon: '🔗' },
    { href: 'https://github.com/2003nitro',   label: 'GitHub',   icon: '🐱' }
  ];
  /*********************************************************************************/
}
