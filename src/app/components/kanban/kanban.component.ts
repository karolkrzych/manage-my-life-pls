import { Component } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogResult } from './task-dialog/task-dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {
  todo: Task[] = [
    {
      title: 'Grab milk',
      description: 'go and get that milk boi',
    },
    {
      title: 'Do stuff',
      description: 'i wgl',
    },
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog) {}

  editTask(list: string, task: Task): void {}

  newTask() {
	const dialogRef = this.dialog.open(TaskDialogComponent, {
		width: '400px',
		data: {
			task: {}
		}
	})
	dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      if(result.task.title && result.task.description) {
        this.todo.push(result.task)
      }
    })
  }

  drop(event: CdkDragDrop<Task[] | null>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
