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
    return this.httpClient.get(`${environment.baseUrl}`)
  }
  postBill(data) {
    // console.log(data)
    return this.httpClient.post<any>(`${environment.baseUrl}`, data)
  }
  editBill(data,id) {
    console.log(id);
    return this.httpClient.put(`${environment.baseUrl}/`+id, data)
  }
  deleteBill(dataId){
    return this.httpClient.delete(`${environment.baseUrl}/`+dataId)
  }
  getbill(keyid:string){
    return this.httpClient.get(`${environment.baseUrl}/?date=`+keyid)
  }
}
