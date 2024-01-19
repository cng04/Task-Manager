import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  tasks: Task[]
  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
    this.displayTasks();
  }

  // Displays all Tasks
  displayTasks(): void {
    this.toDoService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  // Delete all Tasks
  deleteAllTasks(): void {
    this.toDoService.deleteAllTasks().subscribe(data => {
      this.displayTasks();
    });
  }

  // Delete a specific task
  deleteTask(id : string) {
    this.toDoService.deleteTask(id).subscribe(data => {
      this.displayTasks();
    })
  }
}
