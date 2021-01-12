import { Component, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  taskArray = [];
  todoData={
    "alltask":this.taskArray,
    "status":''
  }
  constructor(private todolistservice:TodolistService) { }

  ngOnInit(): void {
    // this.todolistservice.getAllTask().subscribe(info=>{
    //   this.todoData=info;
    // })
  }
  addTask(field) {
    let task = {
    content: "",
    status:""
  };
    // console.log(field.value);
    task.content = field.value;
    this.taskArray.push(task);
    field.value=""
  }
  removeTask(index){
    this.taskArray.splice(index,1)
  }
  inlineThrough(index){
    if(this.taskArray[index].status==""){

    this.taskArray[index].status="strike"
    }
    else{
    this.taskArray[index].status=""
      
    }
  }

}
