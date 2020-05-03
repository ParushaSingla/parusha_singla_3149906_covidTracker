import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'covid-tracking-app';
  logoutEnable = false;
  constructor(private route: Router) {}
  logOut() {
    sessionStorage.clear();
    this.route.navigate(['/adminLogin']);
  }
  logoutEnabled() {
    if (sessionStorage.getItem('TOKEN') !== null) {
      this.logoutEnable = true;
    } else {
      this.logoutEnable = false;
    }
    return this.logoutEnable;
  }
}
