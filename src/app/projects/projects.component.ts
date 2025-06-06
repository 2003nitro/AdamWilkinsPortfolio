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
  featured: boolean;
  tags: string[];
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

  allProjects: Array<{ name: string; image: string; path: string; featured: boolean; tags: string[] }> = [];
  featuredProjects: Array<{ name: string; image: string; path: string; featured: boolean; tags: string[] }> = [];
  filteredProjects: Array<{ name: string; image: string; path: string; featured: boolean; tags: string[] }> = [];

  allTags: string[] = [];
  selectedTags = new Set<string>();

  showTagDropdown = false;

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

        this.allProjects.push({
          name: projectData.name,
          image: projectData.cover_image || 'assets/placeholder.jpg',
          path: path,
          featured: !!projectData.featured,
          tags: projectData.tags || [],
        });
      }

      this.featuredProjects = this.allProjects.filter(project => project.featured);
      this.filteredProjects = [...this.allProjects];

      const tagSet = new Set<string>();
      this.allProjects.forEach((project) => {
        (project.tags || []).forEach((tag) => tagSet.add(tag));
      });

      this.allTags = Array.from(tagSet).sort();

    } catch (err) {
      console.error('Error loading projects:', err);
    }
  }
  /*********************************************************************************/

  /*********************************************************************************/
  /* Toggles the tag dropdown */
  toggleTagDropdown() {
    this.showTagDropdown = !this.showTagDropdown;
  }
  /*********************************************************************************/


  /*********************************************************************************/
  onTagCheckboxChange(tag: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedTags.add(tag);
    } else {
      this.selectedTags.delete(tag);
    }
    this.applyFilter();
  }
  /*********************************************************************************/


  /*********************************************************************************/
  removeTag(tag: string) {
    this.selectedTags.delete(tag);
    this.applyFilter();
  }
  /*********************************************************************************/


  /*********************************************************************************/
  /* Filters the projects based on the selected tags */
  applyFilter(){
    if(this.selectedTags.size === 0){
      this.filteredProjects = [...this.allProjects];
    }
    else{
      this.filteredProjects = this.allProjects.filter((proj) =>
      proj.tags.some((tag) => this.selectedTags.has(tag))
      );
    }
  }
  /*********************************************************************************/


  /*********************************************************************************/
  get selectedTagsArray(): string[] {
    return Array.from(this.selectedTags);
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

