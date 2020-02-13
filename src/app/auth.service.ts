import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FireDbService } from './fire-db.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logeado: boolean;
  email = '';
  pass = '';
  authUser = null;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(public auth: AngularFireAuth,
              private router: Router,
              private db: FireDbService ) { }

  user = this.auth.authState.pipe ( map( authState => {
    console.log('authState: ', authState);
    if (authState) {
      this.authUser = authState;
      return authState;
    } else {
      return null;
    }
  } ));

  login() {
    console.log('login!');
    return this.auth.auth.signInWithEmailAndPassword(this.email, this.pass)
    .then( user => {
      console.log('user logado con email: ', user);
      this.email = '';
      this.pass = '';
      this.authUser = user.user;
      this.db.updateUserData(user.user);
    })
    .catch( e => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario no registrado!',
      });
    });
  }

  emailSignUp() {
    return this.auth.auth.createUserWithEmailAndPassword(this.email, this.pass)
      .then(user => {
      this.email = '';
      this.pass = '';
      this.authUser = user.user;
      this.db.updateUserData(user.user);
      })
      .catch( e => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario ya registrado!',
        });
      });
  }

  logout() {
    console.log('logout!');
    this.auth.auth.signOut();
    this.email = '';
    this.pass = '';
    this.router.navigate(['/']);
    this.logeado = false;
  }

}
