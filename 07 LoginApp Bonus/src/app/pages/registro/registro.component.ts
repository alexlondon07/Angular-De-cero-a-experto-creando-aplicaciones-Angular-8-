import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
    this.userModel.email = 'alexlondon07@gmail.com';
   }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    console.table(this.userModel);
    console.log(form);
  }

}
