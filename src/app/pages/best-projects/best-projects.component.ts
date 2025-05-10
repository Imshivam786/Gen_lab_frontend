import { Component } from '@angular/core';

@Component({
  selector: 'app-best-projects',
  standalone: false,
  templateUrl: './best-projects.component.html',
  styleUrl: './best-projects.component.scss'
})
export class BestProjectsComponent {

  // Create an array with 10 empty items for looping
  placeholderArray = Array(10).fill(null);
  
  // Temporary static categories
  categories = ['All Categories', 'AI Development', 'Web Apps', 'Mobile Apps'];

}
