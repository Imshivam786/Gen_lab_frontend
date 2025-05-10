import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  showOrderDetails: boolean = false;
  orders = [
    {
      id: '12345',
      date: new Date('2024-03-15'),
      status: 'Delivered',
      total: 15999,
      items: [
        { name: 'AI Companion Platform', quantity: 1, image: '/assets/project1.jpg' }
      ],
      deliveryDate: new Date('2024-03-20'),
      address: '123 Tech Park Road, Innovation City, IN 560001',
      invoiceUrl: '/invoices/12345.pdf',
      trackingUrl: 'https://tracker.example.com/12345'
    },
    // Add more orders
  ];
  selectedOrder: any;

  ngOnInit(){

  }

  openOrderDetails(orderDetails: any){
    this.selectedOrder = orderDetails;
    this.showOrderDetails = true;
  }
}
