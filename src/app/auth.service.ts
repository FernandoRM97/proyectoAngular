import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  [x: string]: any;

  constructor(private fbAuth: AngularFireAuth) { }

  user = this.fbAuth.authState.pipe(map(authState => {
    console.log('authState: ', authState);
    if (!authState) {
      return null;
    } else {
      return authState;
    }
    })
  );

  login() {
    console.log('login!');
  }

  logout() {
    console.log('logout!');
  }

  glogin() {
    this.fbAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(user => {
      this.authUser = user.user;
      console.log('this.authUser: ', this.authUser);
    })
    .catch(error => console.log(error));

  }

  glogout() {
    this.fbAuth.auth.signOut();
  }

}
