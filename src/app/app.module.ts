import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { KanbanModule } from './components/kanban/kanban.module';
import { AuthModule } from './components/auth/auth.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CalendarComponent,
    HeaderComponent,
    DashboardComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    KanbanModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
