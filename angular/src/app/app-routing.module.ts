import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './view/to-do-list/to-do-list.component';
import { ToDoFormComponent } from './view/to-do-form/to-do-form.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "toDoList", component: ToDoListComponent},
  {path: "toDoForm", component: ToDoFormComponent},
  {path: '', redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
