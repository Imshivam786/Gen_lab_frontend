import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  standalone: false,
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  @Output() closed = new EventEmitter<void>();
  isOpen = false;
  isLoginMode = true;
  showOtpField = false;
  showPasswordField = false;
  otpTimer = 60;

  
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize forms inside constructor
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.signupForm = this.fb.group({
      identifier: ['', [Validators.required]],
      otp: [''],
      password: ['']
    });
  }

  public open(mode: 'login' | 'signup' = 'login') {
    this.isOpen = true;
    this.isLoginMode = mode === 'login';
    this.resetForms();
  }

  close() {
    this.isOpen = false;
    this.closed.emit();
  }

  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
    this.resetForms();
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Implement login logic
      console.log('Login data:', this.loginForm.value);
      this.close();
    }
  }

  onSignup() {
    if (!this.showOtpField) {
      this.showOtpField = true;
      this.startOtpTimer();
      return;
    }

    if (!this.showPasswordField) {
      this.showPasswordField = true;
      return;
    }

    if (this.signupForm.valid) {
      // Complete signup logic
      console.log('Signup data:', this.signupForm.value);
      this.close();
    }
  }

  sendOtp() {
    // Implement OTP sending logic
    this.startOtpTimer();
  }

  private startOtpTimer() {
    this.otpTimer = 60;
    const interval = setInterval(() => {
      this.otpTimer--;
      if (this.otpTimer <= 0) clearInterval(interval);
    }, 1000);
  }

  private resetForms() {
    this.showOtpField = false;
    this.showPasswordField = false;
    this.loginForm.reset();
    this.signupForm.reset();
  }
}
