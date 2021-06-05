import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  isLoggedIn: boolean = this.auth.isLoggedIn();

  user = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    this.auth
      .login(this.user.controls.email.value, this.user.controls.password.value)
      .then(() => this.dialogRef.close(true));
  }
}
