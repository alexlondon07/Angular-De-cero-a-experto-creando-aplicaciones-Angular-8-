import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from 'src/app/services/heroes.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(
    private _heroeService: HeroeService,
    private _router:Router
    ) {}

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes();
  }

  verHeroe(idx:number){
    this._router.navigate( ['/heroe', idx] );
  }

}
