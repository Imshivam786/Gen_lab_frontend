import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  @Output() closed = new EventEmitter<void>();
  isOpen = false;
  showOtpField = false;
  otpTimer = 30;
  
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      identifier: ['', [Validators.required]],
      otp: [''],
      newPassword: ['']
    });
  }

  open() {
    this.isOpen = true;
    this.resetForm();
  }

  close() {
    this.isOpen = false;
    this.closed.emit();
  }

  onSubmit() {
    if (!this.showOtpField) {
      this.showOtpField = true;
      this.startOtpTimer();
      return;
    }

    if (this.forgotPasswordForm.valid) {
      // Handle password reset logic
      this.close();
    }
  }

  resendOtp() {
    this.startOtpTimer();
  }

  private startOtpTimer() {
    this.otpTimer = 30;
    const interval = setInterval(() => {
      this.otpTimer--;
      if (this.otpTimer <= 0) clearInterval(interval);
    }, 1000);
  }

  private resetForm() {
    this.showOtpField = false;
    this.forgotPasswordForm.reset();
  }
}

