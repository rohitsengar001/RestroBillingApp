import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { LoginComponent } from './login/login.component';

const accountRoutes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'dashboard',redirectTo:'dashboard/bill/home',pathMatch:'full'},
    {path:'dashboard',loadChildren:()=>import('../layout/layout.module').then(m=>m.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
