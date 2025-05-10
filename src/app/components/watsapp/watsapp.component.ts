import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watsapp',
  standalone: false,
  templateUrl: './watsapp.component.html',
  styleUrl: './watsapp.component.scss',
})
export class WatsappComponent {
  @Input() phoneNumber: string = '911234567890'; // Default number
  @Input() message: string = 'Hi Genlab Team, I need help with...'; // Default message
  @Input() bottomSpacing: string = '20'; // Default bottom spacing (in rem units)

  get whatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
