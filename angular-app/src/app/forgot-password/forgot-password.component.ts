import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  private _fb = inject(FormBuilder);
  private _authService = inject(AuthService);

  errMessage = '';
  forgotPasswordForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  forgotPassword() {
    const { email } = this.forgotPasswordForm.value;
    if (this.forgotPasswordForm.valid) {
      this._authService.forgotPassword(email!).subscribe({
        next: () => console.log('Password reset link sent'),
        error: (err) => (this.errMessage = err),
      });
    }
  }
}
