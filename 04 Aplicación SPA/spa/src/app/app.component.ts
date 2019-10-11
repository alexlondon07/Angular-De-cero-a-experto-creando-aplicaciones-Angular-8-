import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spa';

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.localAuthSetup();
  }
}
