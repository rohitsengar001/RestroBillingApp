import { Injectable } from '@angular/core';
import { truncate } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  checkUser(form):boolean{
    if(form.get('email').value=='rohitsengar001@gmail.com' && form.get('password').value=='rohit@321')
    {
      localStorage.setItem("username","rohitsengar001@gmail.com")
      return true
    }
    else
      return false  
  }
}
