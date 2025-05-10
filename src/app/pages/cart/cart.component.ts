import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  showAddressForm = false;
  address: any = null;
  cartItems = [
    {
      id: '1',
      image: '/assets/project1.jpg',
      name: 'AI Companion SaaS Platform',
      seller: 'Genlab Tech',
      price: 15000,
      discount: 15,
      quantity: 1,
      deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
    },
    {
      id: '2',
      image: '/assets/project1.jpg',
      name: 'AI Companion SaaS Platform',
      seller: 'Genlab Tech',
      price: 15000,
      discount: 15,
      quantity: 1,
      deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days from now
    }
    // Add more items as needed
  ];

  get totalMrp(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get totalDiscount(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity * item.discount/100), 0);
  }

  get deliveryCharge(): number {
    const subtotal = this.totalMrp - this.totalDiscount;
    return subtotal > 10000 ? 0 : 500;
  }

  get totalAmount(): number {
    const subtotal = this.totalMrp - this.totalDiscount;
    return subtotal + this.deliveryCharge;
  }

  updateQuantity(item: any, newQuantity: number): void {
    item.quantity = newQuantity;
  }

  removeItem(item: any): void {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  buyNow(item: any): void {
    // Implement single item checkout
  }

  checkout(): void {
    // Implement full checkout logic
  }

  handleAddressSave(newAddress: any) {
    this.address = newAddress;
    // Here you would typically send the address to your backend
  }
}