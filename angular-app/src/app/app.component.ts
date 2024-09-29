import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpTokenService } from './services/http-token.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  private _tokenService = inject(HttpTokenService);

  ngOnInit(): void {
    this._tokenService.getCsrfToken().subscribe(console.log);
  }
}
