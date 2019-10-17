import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  userModel: UserModel;
  rememberMe = false;

  constructor(
    private auth: AuthService,
    private router: Router) {
    this.userModel = new UserModel();
  }

  ngOnInit() { }

  onSubmit(form: NgForm) {
  if ( !form.valid ) { return; }

  Swal.fire({
    allowOutsideClick: false,
    text: 'Espere por favor...',
    type: 'info'
  });
  Swal.showLoading();

  this.auth.newUser( this.userModel )
        .subscribe( res => {
          console.log('resp', res );
          Swal.close();

          if (this.rememberMe) {
            localStorage.setItem('email', this.userModel.email);
          }

          this.router.navigateByUrl('/home');
      }, (err) => {
        console.log('error', err );
        Swal.fire({
          type: 'error',
          title: 'Error al registarse.',
          text: err.error.error.message
        });
      });
  }

}
