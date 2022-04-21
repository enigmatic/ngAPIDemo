import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = '/api/getRoles';  //Change to whatever you want the default URL to be
  result = 'Results here';
  waiting = false;

  constructor(private http:HttpClient){}

  public logout() {
    this.url = '/logout';  //Change to logout URL
    this.callServer();
  }

  public callServer() {
    this.waiting = true;
    this.http.get(this.url).subscribe({
      next: (r) => {
        this.result = JSON.stringify(r);
        this.waiting = false;
      },
      error: (e) => {
        this.result = JSON.stringify(e);
        this.waiting = false;
      }
    });
  }
}
