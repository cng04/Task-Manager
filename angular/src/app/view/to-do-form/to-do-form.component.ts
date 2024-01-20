import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { ToDoService } from 'src/app/services/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';


@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {
  taskForm: FormGroup = this.fb.group({
    priority: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    title: new FormControl('', Validators.required),
    category: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl('', Validators.required)
  });

  // ID is the route parameter that holds the elements currently edited (if any)
  ID : string;

  // Boolean to toggle editing mode on and off
  // edit = false;

  // Checking if the form has been submitted before (so if we are in edit mode or not)
  submitted = false;

  task: Task = {
    id: "",
    priority: 0,
    title: "",
    category: "",
    description: "",
    date: ""
  }

  constructor(private todoService: ToDoService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Gets the id in the URL
    this.ID = this.route.snapshot.params["id"];

    // If there's an id in the URL, we are editing the task not adding it
    if (this.ID) {
      this.submitted = true;
      //this.edit = true;

      // calls the getTask() method in todoServce, subscribes to the first emitted value, then uses patchValue with the emitted value to update form controls with existing value
      this.todoService.getTask(this.ID).pipe(first()).subscribe(data => {
        console.log(this.taskForm);
        this.taskForm.patchValue(data);
        //this.edit = false;
      })
    }
  }

  // Saving a new task or editing a task
  saveTask(): void {
    // If we are editing, call the editTask method which calls the PUT API
    if (this.submitted) {
      this.todoService.editTask(this.ID, this.task).subscribe(data => {
        this.task = data;
        this.router.navigateByUrl("/toDoList");
      })
    // If we are creating, call the addTask method which calls the POST API
    } else {
      this.todoService.addTask(this.task).subscribe(data => {
        this.task = data;
        this.router.navigateByUrl("/toDoList");
      })
    }
  }

  // On submit of the form
  onSubmit(): void {
    // Fields of task are populated with formControl Values
    this.task = this.taskForm.value;
    this.saveTask();
  }

  // Note for Caleb: Read Angular Documentation on this and why in the html we can access the priority formControl with: form['priority']
  get form() {
    return this.taskForm.controls;
  }
}
