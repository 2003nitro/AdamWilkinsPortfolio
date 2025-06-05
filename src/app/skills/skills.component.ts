/**************************************************************
File: skills.component.ts
Author: Adam Wilkins
Last Updated: 6/2/2025
Last to Update: Adam Wilkins
***************************************************************/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  programmingLanguages: string[] = [
    'Python',
    'C++',
    'C#',
    'TypeScript / JavaScript',
    'HTML & CSS',
    'Java'
  ];

  frameworksLibraries: string[] = [
    'Angular (TypeScript)',
    'React / React Native',
    'Node.js',
    'TensorFlow & Keras'
  ];

  embeddedSystems: string[] = [
    'Arduino (Mega, Pro Micro)',
    'ESP32 (Wi-Fi & Bluetooth)',
    'Microcontrollers & PCB Prototyping',
    '3D Modeling & Printing (Onshape)'
  ];

  toolsPlatforms: string[] = [
    'Git & GitHub',
    'Linux (Ubuntu), Windows, MacOS',
    'VSCode / PyCharm / Visual Studio',
    'Docker & Containerization',
    'Figma'
  ];

  courseworkEducation: string[] = [
    'UNIX Programming',
    'Database Systems (SQL)',
    'Object Oriented Programming',
    'Software Development Lifecycle (Agile, Scrum)',
    'Software Test, Automation, and Quality Assurance',
    'Computer Architecture',
    'Computer Networks',
    'Data Structures and Algorithms',
    'Embedded Systems',
    'Programming Language Concepts',
    'Mobile Architecture and Programming',
    'Analysis of Algorithms',
    'Software Engineering Project 1 & 2 (Senior Capstone)',
    'Computer Software & Operating Systems',
    'Artificial Intelligence',
    'Client/Server Development',
    'Mobile Robots'
  ];

  softSkillsMisc: string[] = [
    'Problem Solving & Logical Thinking',
    'Teamwork & Collaboration',
    'Effective Communication (Written & Verbal)',
    'Time Management & Organization',
    'Adaptability & Quick Learning',
    'Leadership (RA, Peer Advisor)'
  ];

  // Split the coursework array into two roughly equal halves
  leftColumn: string[];
  rightColumn: string[];

  constructor() {
    const midIndex = Math.ceil(this.courseworkEducation.length / 2);
    this.leftColumn = this.courseworkEducation.slice(0, midIndex);
    this.rightColumn = this.courseworkEducation.slice(midIndex);
  }
}
