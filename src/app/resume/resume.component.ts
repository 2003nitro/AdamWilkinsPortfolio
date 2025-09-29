import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  pdfHref = 'assets/resume/AdamWilkinsResume.pdf';
  pdfSafeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfHref);
  }
}
