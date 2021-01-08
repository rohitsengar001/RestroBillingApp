import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginReactiveForm:FormGroup
result:boolean
  constructor(private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginReactiveForm=new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)])
    })
  }
  onSubmit(){
    this.result=this.loginservice.checkUser(this.loginReactiveForm)
    if (this.result==true) {
      // this.router.navigate(['./dashboard'])
    }
    else{
      alert("email and password are incorrect!!!")
    }
    console.log(this.loginReactiveForm);
  }
}
