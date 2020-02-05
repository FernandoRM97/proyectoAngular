import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  navbarOpen = false;

  constructor(public auth: AuthService) {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
