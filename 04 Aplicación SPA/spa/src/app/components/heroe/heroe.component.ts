import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( 
    private activateRoute: ActivatedRoute,
    private _heroeService: HeroeService
    ) {
    
    this.activateRoute.params.subscribe ( params => {
      this.heroe =this._heroeService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
