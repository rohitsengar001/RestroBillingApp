import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  checkUser(data):boolean{
    console.log( typeof data.get('password').value);
    if ((data.get('email').value=='rohitsengar001@gmail.com') && (data.get('password').value=='rohit@321') ) {
      return true
    }
    else{
      return false
    }
  }
}
