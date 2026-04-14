import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Logout } from './logout/logout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Logout, Login, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Learn Angular');
}
