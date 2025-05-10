import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

// this component show projects of same category on click of show more
export class ProjectsComponent {
  placeholderArray = Array(10).fill(null);
}
