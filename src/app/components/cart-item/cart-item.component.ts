import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface CartItem {
  id: string;
  image: string;
  name: string;
  seller: string;
  price: number;
  discount: number;
  quantity: number;
  deliveryDate: Date;
}

@Component({
  selector: 'app-cart-item',
  standalone: false,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input() item!: CartItem;
  @Output() quantityChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<void>();
  @Output() buy = new EventEmitter<void>();

  calculateDiscountedPrice(): number {
    return this.item.price * (1 - this.item.discount/100) * this.item.quantity;
  }

  updateQuantity(change: number): void {
    const newQuantity = this.item.quantity + change;
    if (newQuantity > 0) {
      this.quantityChange.emit(newQuantity);
    }
  }

  removeItem(): void {
    this.remove.emit();
  }

  buyNow(): void {
    this.buy.emit();
  }
}
