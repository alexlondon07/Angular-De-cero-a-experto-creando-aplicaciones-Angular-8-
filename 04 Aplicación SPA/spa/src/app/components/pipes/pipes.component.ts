import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {

  name:string = "alexander londoño espejo";
  array = [1,2,3,4,5,6,7,8,9];
  salary = 6678883.89;
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  promise = new Promise((resolve, reject) => {
    setTimeout(() =>resolve('Data'), 3500);
  });

  birthday = new Date();

  video = "nzc5iO8at3M";

  activate:boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
