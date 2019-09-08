import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  text:string;

  constructor( 
    private _activateRoute: ActivatedRoute,
    private _heroeService: HeroeService ) {

  }

  ngOnInit() {
    this._activateRoute.params.subscribe( params => {
      console.log(params['text']);
      this.text =  params['text'];
      this.heroes = this._heroeService.searchHeroeService( params['text'] );
    })
  }

}
