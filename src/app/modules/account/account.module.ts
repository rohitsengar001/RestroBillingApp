import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
