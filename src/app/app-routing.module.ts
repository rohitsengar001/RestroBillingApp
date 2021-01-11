import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingpdfComponent } from './modules/billing/billingpdf/billingpdf.component';
import { PagenotfoundComponent } from './modules/layout/pagenotfound/pagenotfound.component';
// import { HomeComponent } from './modules/billing/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/account/login',pathMatch:'full'},
  {path:'account',loadChildren:()=>import ('./modules/account/account.module').then(m=>m.AccountModule)},
  {path:"billingpdf",component:BillingpdfComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
