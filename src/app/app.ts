import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [HttpClient],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App implements OnInit {
  protected readonly title = signal('frontend teste');

  constructor(
    private readonly _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get("http://localhost:8080/weatherforecast").subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }
}
