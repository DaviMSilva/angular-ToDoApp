import { JsonPipe } from '@angular/common';
import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'tarefa 1', completed: false},
    { id: 2, description: 'tarefa 2', completed: false},
    { id: 3, description: 'tarefa 3', completed: false},
    { id: 4, description: 'tarefa 4', completed: false},
    { id: 5, description: 'tarefa 5', completed: false},
    { id: 6, description: 'tarefa 6', completed: true},
    { id: 7, description: 'tarefa 7', completed: false},
    { id: 8, description: 'tarefa 8', completed: true},
    { id: 9, description: 'tarefa 9', completed: false},
    { id: 10, description: 'tarefa 10', completed: false}
  ];

  constructor() { }

  getAll() {
    const list = window.localStorage.getItem('lista-tarefas')
    if(list) {
      this.tasks = JSON.parse(list);
    }
    return this.tasks;
  }
  getById(id: number) {
    return this.tasks.find((value)=> value.id == id);

  }

  save(task: Task){
    if (task.id) {
      const taskArr = this.getById(task.id)
      taskArr!.description = task.description;
      taskArr!.completed = task.completed;
    } else {
      let lastId = 0;
      if(this.tasks.length > 0){
        lastId = this.tasks[this.tasks.length-1].id!;
      }
      task.id = lastId +1;
      task.completed = false;
      this.tasks.push(task);
    }
    window.localStorage.setItem('lista-tarefas', JSON.stringify(this.tasks));
  }

  delete(id: number){
    const taskIndex = this.tasks.findIndex((index)=> index.id == id);
    this.tasks.splice(taskIndex, 1);
    window.localStorage.setItem('lista-tarefas', JSON.stringify(this.tasks));
  }
}
