import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpTokenService {
  readonly baseUrl = 'https://laravel.rodrigort.com';
  http = inject(HttpClient);

  getCsrfToken() {
    return this.http.get(`${this.baseUrl}/sanctum/csrf-cookie`, {
      withCredentials: true,
      observe: 'response',
    });
  }
}
