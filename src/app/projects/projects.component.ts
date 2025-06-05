/**************************************************************
File: projects.component.ts
Author: Adam Wilkins
Last Updated: 6/2/2025
Last to Update: Adam Wilkins
***************************************************************/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ProjectData {
  name: string;
  cover_image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  constructor(private readonly router: Router) {}
  projects: { name: string; image: string; path: string }[] = [];

  ngOnInit(): void {
    this.loadProjectsList();
  }

  /*********************************************************************************/
  /* Gets each projects path and then saves the name, cover image, and the path of each project in a list */
  async loadProjectsList(): Promise<void> {
    try {
      const res = await fetch('assets/project-data/Projects.json');
      const projectPaths: string[] = await res.json();

      for (const path of projectPaths) {
        const projectRes = await fetch(path);
        const projectData: ProjectData = await projectRes.json();

        this.projects.push({
          name: projectData.name,
          image: projectData.cover_image || 'assets/placeholder.jpg',
          path: path
        });
      }
    } catch (err) {
      console.error('Error loading projects:', err);
    }
  }
  /*********************************************************************************/

   /*********************************************************************************/
   /* Opens the selected project with the path */
  openProject(path: string) {
    this.router.navigate(
      ['/project-temp'],
      { queryParams: { src: path } }
    );
  }
   /*********************************************************************************/
}

