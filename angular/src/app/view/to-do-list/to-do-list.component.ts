import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ToDoService } from 'src/app/services/to-do.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  tasks: Task[]
  constructor(private toDoService: ToDoService, private router: Router) {
  }

  ngOnInit(): void {
    // Displays tasks and reorders the priority
    this.displayTasks();
  }

  // Displays all Tasks
  displayTasks(): void {
    this.toDoService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  // Delete all Tasks
  // Place this.displayTasks() in the subcribe function scope to get the page to display changes right away
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

  // Editing a task, redirects to toDoForm with a parameter passed in denoting which task is being editied
  editTask(id: string): void {
    this.router.navigate(["/toDoForm", id]);
  }
}
