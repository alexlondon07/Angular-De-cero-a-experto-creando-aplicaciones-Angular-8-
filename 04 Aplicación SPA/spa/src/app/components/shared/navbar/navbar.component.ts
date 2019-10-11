import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router, public auth: AuthService ) { }

  ngOnInit() {
  }

  searchHeroe( text:string ){
    this._router.navigate( ['/search', text] );
  }


}
