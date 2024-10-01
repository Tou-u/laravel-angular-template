import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private _router = inject(Router);
  private _authService = inject(AuthService);
  private _fb = inject(FormBuilder);

  errMessage = '';
  registerForm = this._fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  login() {
    const {name ,email, password } = this.registerForm.value;
    if (this.registerForm.valid) {
      this._authService.register(name!, email!, password!).subscribe({
        next: (res) => this._router.navigate(['/home']),
        error: (err) => (this.errMessage = err)
      })
    }
  }
}
