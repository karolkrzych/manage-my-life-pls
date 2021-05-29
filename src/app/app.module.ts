import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { KanbanComponent } from './components/kanban/kanban.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HeaderComponent } from './components/layout/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    KanbanComponent,
    CalendarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DashboardModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [NavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
