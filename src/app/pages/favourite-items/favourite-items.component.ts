import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite-items',
  standalone: false,
  templateUrl: './favourite-items.component.html',
  styleUrl: './favourite-items.component.scss'
})
export class FavouriteItemsComponent {

  placeholderArray = Array(10).fill(null);
  categories = ['All Categories', 'AI Development', 'Web Apps', 'Mobile Apps'];
}
