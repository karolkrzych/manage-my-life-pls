import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.userData = angularFireAuth.authState;
  }

  register(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res =>{
      console.log('User successfully signed up', res);
    }).catch(err => {
      console.log('Something is wrong:', err.message);
    });
  }

  login(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res =>{
      
      this.userData.subscribe(res => console.log(res))
      
    }).catch(err =>{
      console.log('Something is wrong:', err.message);
    })
  }

  logout() {
    this.angularFireAuth.signOut();
  }
}


