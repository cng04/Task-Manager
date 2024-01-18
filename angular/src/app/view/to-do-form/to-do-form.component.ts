import { Component } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent {
  task: Task = {
    id: "",
    priority: 0,
    title: "",
    category: "",
    description: "",
    date: ""
  }

  constructor(private todoService: ToDoService) {}

  saveTask(): void {
    this.todoService.addTask(this.task).subscribe(data => {
      this.task = new Task();
    })
  }

  onsubmit(): void {
    this.saveTask();
  }
}
