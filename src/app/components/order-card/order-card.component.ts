import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-card',
  standalone: false,
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss'
})
export class OrderCardComponent {

  @Input() order: any;
  
  trackOrder(url: string) {
    window.open(url, '_blank');
  }

}
