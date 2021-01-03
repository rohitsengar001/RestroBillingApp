import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class BillingService {
  // environment.url='http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  //api calling to the fake server 
  getAllBill() {
    return this.httpClient.get(`${environment.baseUrl}/bill`)
  }
  postBill(data) {
    console.log(data)
    return this.httpClient.post<any>(`${environment.baseUrl}/bill`, data)
  }
  editBill(data) {
    console.log(data.userId);
    let userId = data.userId;
    return this.httpClient.put(`${environment.baseUrl}/bill/` + userId, data)
  }
  deleteBill(dataId){
    return this.httpClient.delete(`${environment.baseUrl}/bill/`+dataId)
  }
}
