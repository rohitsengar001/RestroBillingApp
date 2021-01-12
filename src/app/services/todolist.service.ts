import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private httpClient:HttpClient) { }
  getAllTask() {
    return this.httpClient.get(`${environment.baseUrl}/todo`)
  }
  postTask(data) {
    // console.log(data)
    return this.httpClient.post<any>(`${environment.baseUrl}/todo`, data)
  }
  deleteTask(id){
    return this.httpClient.delete(`${environment.baseUrl}/todo/`+id)
  }
  editTask(data,id){
    console.log("update service",data);
    return this.httpClient.put(`${environment.baseUrl}/todo/`+id, data)
  }
}
