import { Component } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  standalone: false,
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent {

  categories = [
    {
      name: 'AI Development',
      projects: Array(10).fill({/* project data */})
    },
    {
      name: 'Web Applications',
      projects: Array(10).fill({/* project data */})
    },
    // Add more categories
  ];
}
