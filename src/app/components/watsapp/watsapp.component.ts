import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watsapp',
  standalone: false,
  templateUrl: './watsapp.component.html',
  styleUrl: './watsapp.component.scss',
})
export class WatsappComponent {
  @Input() phoneNumber: string = '8905968789';
  @Input() message: string = 'Hi Genlab Team, I need help with...';
  @Input() bottomSpacing: string = '20';

  get whatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
