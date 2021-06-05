import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginComponent } from '../../auth/login/login.component';
import { RegisterComponent } from '../../auth/register/register.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private dialog: MatDialog,
    private auth: AuthService,
  ) {}

  isLoggedIn: boolean = this.auth.isLoggedIn();

  openLoginDialog() {
    let loginDialog = this.dialog.open(LoginComponent, {
      height: '500px',
      width: '400px',
    });
    loginDialog.afterClosed().subscribe((res) => {
      if (res) {
        window.location.replace('/dashboard');
      }
    });
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent, {
      height: '500px',
      width: '400px',
    });
  }

  logout() {
    this.auth.logout();
  }
}
