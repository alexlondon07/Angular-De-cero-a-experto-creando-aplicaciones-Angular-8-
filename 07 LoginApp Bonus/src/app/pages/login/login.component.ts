import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserModel = new UserModel();
  rememberMe = false;

  constructor( private auth: AuthService, private router: Router ) { }

    ngOnInit() {
      if ( localStorage.getItem('email') ) {
        this.userModel.email = localStorage.getItem('email');
        this.rememberMe = true;
      }
    }

    login(form: NgForm) {

      Swal.fire({
        allowOutsideClick: false,
        text: 'Espere por favor...',
        type: 'info'
      });
      Swal.showLoading();

      if ( form.invalid ) { return; }

      this.auth.login( this.userModel ).subscribe( res => {
          Swal.close();

          if (this.rememberMe) {
            localStorage.setItem('email', this.userModel.email);
          }
          this.router.navigateByUrl('/home');
        }, (err) => {
          console.log('error', err );
          Swal.fire({
            type: 'error',
            title: 'Error al autenticar.',
            text: err.error.error.message
          });
        });
    }
}
