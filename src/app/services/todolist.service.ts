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
}
