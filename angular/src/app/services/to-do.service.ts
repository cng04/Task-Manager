import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private getURL = 'http://localhost:8080/todo/Tasks';
  private postURL = 'http://localhost:8080/todo/addTask';
  private deleteURL = 'http://localhost:8080/todo/delete';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.getURL);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.postURL, task);
  }

  deleteAllTasks(): Observable<Task> {
    return this.http.delete<Task>(this.deleteURL);
  }
}
