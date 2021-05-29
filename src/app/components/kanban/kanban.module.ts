import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanComponent } from './kanban.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [KanbanComponent, TaskComponent],
  exports: [KanbanComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule
  ],
  bootstrap: []

})
export class KanbanModule { }
