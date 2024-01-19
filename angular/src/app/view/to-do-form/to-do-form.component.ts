import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { ToDoService } from 'src/app/services/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent {
  taskForm: FormGroup = this.fb.group({
    priority: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  task: Task = {
    id: "",
    priority: 0,
    title: "",
    category: "",
    description: "",
    date: ""
  }

  constructor(private todoService: ToDoService, private fb: FormBuilder, private router: Router) {}

  saveTask(): void {
    this.todoService.addTask(this.task).subscribe(data => {
      this.task = data;
    })

    this.router.navigateByUrl("/toDoList");
  }

  onsubmit(): void {
    this.task = this.taskForm.value;
    this.saveTask();
  }
}
