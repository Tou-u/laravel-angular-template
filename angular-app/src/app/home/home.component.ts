import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  errMessage = '';
  user: any;

  ngOnInit(): void {
    this._authService.getUser().subscribe({
      next: (res) => (this.user = res),
      error: (err) => (this.errMessage = err.error?.message),
    });
  }

  logout() {
    this._authService.logout().subscribe({
      next: () => this._router.navigate(['/login']),
    });
  }
}
