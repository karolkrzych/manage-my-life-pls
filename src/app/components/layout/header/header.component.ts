import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(private dialog: MatDialog) { }

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      height: "500px",
      width: "400px",
    })
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent, {
      height: "500px",
      width: "400px",
    })
  }
}
