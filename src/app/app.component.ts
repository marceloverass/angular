import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquim@email.com',
    role: 'Admin',
  }

  userStats = {
    levelgc: 20,
    levelfaceit: 10,
    patente: 'Global',
  }

  title = 'angular';
}
