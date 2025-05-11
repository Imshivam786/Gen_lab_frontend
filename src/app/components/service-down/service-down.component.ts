import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-down',
  standalone: false,
  templateUrl: './service-down.component.html',
  styleUrl: './service-down.component.scss'
})
export class ServiceDownComponent {

  @Input() message: string = '';
  @Input() statusCode: string = '503';
  lastUpdated = new Date();

  refreshPage() {
    window.location.reload();
  }

}
