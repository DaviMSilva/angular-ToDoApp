import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input()
  task: Task;

  constructor(private taskService: TaskService){

  }

  remove(task: Task) {
    this.taskService.delete(task.id!);
  }

  onCompletedCheckChange(task:Task){
    this.taskService.save(task);
  }
}
