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
    this.toDoService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }
}
