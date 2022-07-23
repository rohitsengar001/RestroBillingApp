import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { truncate } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  checkUser(form):boolean{
    if(form.get('email').value=='test001@gmail.com' && form.get('password').value=='test@321')
    {
      localStorage.setItem("username","rohitsengar001@gmail.com")
      return true
    }
    else
      return false  
  }
  logOutUser(){
    localStorage.clear()
    this.router.navigate(['account'])
  }

}
