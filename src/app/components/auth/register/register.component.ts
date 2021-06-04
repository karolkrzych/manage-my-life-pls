import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private auth: AuthService) { }

  user = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  register() {
    this.auth.register(this.user.controls.email.value, this.user.controls.password.value);
  }
}
