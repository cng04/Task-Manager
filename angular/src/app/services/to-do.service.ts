import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl = 'http://localhost:8080/todo/Tasks';

  constructor(private http: HttpClient) { }

  // Calls GET API
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTask(id : string): Observable<Task> {
    return this.http.get<Task>(this.apiUrl + "/" + id);
  }

  // Calls POST API
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // Calls Put API
  editTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + "/" + id, task);
  }

  // Calls DELETE API
  deleteAllTasks(): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl);
  }

  // Calls DELETE API
  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + "/" + id);
  }
}
