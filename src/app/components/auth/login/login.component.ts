import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  user = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login() {
    this.auth.login(this.user.controls.email.value, this.user.controls.password.value)
  }

}
