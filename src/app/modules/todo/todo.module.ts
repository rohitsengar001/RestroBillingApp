import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';



@NgModule({
  declarations: [TodoAppComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
