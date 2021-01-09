import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginReactiveForm: FormGroup;
  result: boolean;
  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginReactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
      ]),
    });
    if (localStorage.getItem('username') != null) {
      this.router.navigate(['../account/dashboard']);
    }
  }
  onSubmit() {
    console.log(this.loginReactiveForm);
    this.result = this.loginservice.checkUser(this.loginReactiveForm);
    if (this.result == true) {
      this.router.navigate(['../account/dashboard']);
    } else alert('user name and password are incorrect!!');
  }
}
