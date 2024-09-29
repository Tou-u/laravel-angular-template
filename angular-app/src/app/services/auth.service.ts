import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly baseUrl = 'http://localhost:80';
  http = inject(HttpClient);

  login(email: string, password: string) {
    return this.http.post(
      `${this.baseUrl}/login`,
      { email, password },
      { withCredentials: true }
    );
  }

  logout() {
    return this.http.post(
      `${this.baseUrl}/logout`,
      {},
      { withCredentials: true }
    );
  }

  getUser() {
    return this.http.get(`${this.baseUrl}/api/user`, { withCredentials: true });
  }

  forgotPassword(email: string) {
    return this.http.post(
      `${this.baseUrl}/forgot-password`,
      { email },
      { withCredentials: true }
    );
  }
}
