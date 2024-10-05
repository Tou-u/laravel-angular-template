import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpTokenService {
  readonly baseUrl = environment.baseUrl
  http = inject(HttpClient);

  getCsrfToken() {
    return this.http.get(`${this.baseUrl}/sanctum/csrf-cookie`, {
      withCredentials: true,
      observe: 'response',
    });
  }
}
