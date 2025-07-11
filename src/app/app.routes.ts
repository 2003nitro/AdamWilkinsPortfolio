// src/app/app.routes.ts
import { Routes }     from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectTempComponent } from './project-temp/project-temp.component';

export const routes: Routes = [
  { path:   '',      redirectTo:'home', pathMatch:'full' },
  { path: 'home',    component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills',  component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project-temp', component: ProjectTempComponent },
  { path:   '**',    redirectTo: 'home' }
];
