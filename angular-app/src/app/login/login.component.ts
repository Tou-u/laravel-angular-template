import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private _router = inject(Router);
  private _authService = inject(AuthService);
  private _fb = inject(FormBuilder);

  errMessage = '';
  loginForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', []],
  });

  login() {
    const { email, password } = this.loginForm.value;
    if (this.loginForm.valid) {
      this._authService.login(email!, password!).subscribe({
        next: (res) => this._router.navigate(['/home']),
        error: (err) => (this.errMessage = err),
      });
    }
  }
}
