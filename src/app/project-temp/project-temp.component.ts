/**************************************************************
File: project-temp.component.ts
Author: Adam Wilkins
Last Updated: 1/17/2026
Last to Update: Adam Wilkins
***************************************************************/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-temp',
  standalone: true,
  imports: [ CommonModule ],     // no need to import RouterModule just to inject
  templateUrl: './project-temp.component.html',
  styleUrls: ['./project-temp.component.css']
})
export class ProjectTempComponent implements OnInit {
  ProjectData: any = null;
  current = 0;  // which slide is showing

  constructor(private readonly route: ActivatedRoute) {}

  /*********************************************************************************/
  /* Sets project data to data after finding the path */
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const src = params['src'];
      if (!src) { return; }

      fetch(src)
        .then(r => r.json())
        .then(data => this.ProjectData = data)
        .catch(err => console.error(err));
    });
  }
  /*********************************************************************************/

   /*********************************************************************************/
   /* Used to update current image shown */
  select(i: number) {
    this.current = i;
  }
  /*********************************************************************************/

   /*********************************************************************************/
   /* Returns true if the media is a video and returns true */
  isVideo(src: string): boolean {
    return /\.(mp4|webm|ogg)$/i.test(src);
  }
   /*********************************************************************************/

   /*********************************************************************************/
   /* Returns the status of the project based on status in json file */
   GetStatusClass(status: string) {
    return {
    'Completed-status': status === 'Completed',
    'InProgress-status': status === 'In Progress',
    'NotCompleted-status': status === 'Not Completed',
    'ComingSoon-status': status === 'Coming Soon',
    };
    /*********************************************************************************/
  }

}
