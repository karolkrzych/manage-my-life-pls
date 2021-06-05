import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: Observable<any>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userData = angularFireAuth.authState;
  }

  register(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('User successfully signed up', res);
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        res.user
          .getIdToken()
          .then((token) => {
            sessionStorage.setItem('token', token);
          })
        }).then(() => resolve(true))
        .catch((err) => {
          console.log('Something is wrong:', err.message);
        });
    })
  }

  logout() {
    this.angularFireAuth
      .signOut()
      .then(() => sessionStorage.removeItem('token'))
      .finally(() => {
        window.location.reload();
      });
  }

  isLoggedIn(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
