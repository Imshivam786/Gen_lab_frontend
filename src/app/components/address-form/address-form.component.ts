import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  standalone: false,
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {
  @Input() visible = false;
  @Output() saved = new EventEmitter<any>();
  @Output() closed = new EventEmitter<void>();

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      landmark: [''],
      district: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      country: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]]
    });
  }

  showError(field: string): boolean {
    const control = this.addressForm.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  onSubmit() {
    if (this.addressForm.valid) {
      this.saved.emit(this.addressForm.value);
      this.close();
    }
  }

  close() {
    this.addressForm.reset();
    this.closed.emit();
  }
}
