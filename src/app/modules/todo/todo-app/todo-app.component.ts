import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit,OnDestroy,DoCheck {

  todoData
  taskArray:any[];
  constructor(private todolistservice:TodolistService) { }
  
  ngOnInit(): void {
    this.getAlltask()
  }
 ngDoCheck(){
  // this.getAlltask()

 }
  ngOnDestroy(): void {
    // this.todolistservice.postTask(this.taskArray).subscribe(info=>{
      console.log("ngOnDestroy");
    // })
  }
  
  addTask(field) {
    let task = {
    content: "",
    status:""
  };
    // console.log(field.value);
    task.content = field.value;
    this.postTask(task)
    // this.taskArray.push(task);
    field.value=""
    this.getAlltask()
  }
  removeTask(index,id){
    this.taskArray.splice(index,1)
    this.removeTaskApi(id)
    console.log("delete item",id);

  }
  inlineThrough(index,id){
    if(this.taskArray[index].status==""){

    this.taskArray[index].status="strike"
    
    }
    else{
    this.taskArray[index].status=""
      
    }
    console.log("update",this.taskArray[index]);
    this.updateTask(this.taskArray[index],id)
    // this.getAlltask()

  }
  getAlltask(){
    this.todolistservice.getAllTask().subscribe((info:any)=>{
      this.taskArray=info
    })
  }
  postTask(data){
    this.todolistservice.postTask(data).subscribe(info=>{
      this.taskArray.push(data)
        console.log('task posted');
    })
  }
  removeTaskApi(id){
    this.todolistservice.deleteTask(id).subscribe(info=>{

    })
  }
  updateTask(data,id){
    this.todolistservice.editTask(data,id).subscribe(info=>{

    })
  }
}
