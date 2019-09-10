import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private _router: Router) { }

  ngOnInit() {

  }

  verHeroe(){
    this._router.navigate( ['/heroe', this.index] );
  }

}
