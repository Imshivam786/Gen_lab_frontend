import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-details-modal',
  standalone: false,
  templateUrl: './order-details-modal.component.html',
  styleUrl: './order-details-modal.component.scss'
})
export class OrderDetailsModalComponent {

  @Input() visible = false;
  @Input() order: any;
  @Output() close = new EventEmitter<void>();

}
