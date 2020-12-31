import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { BillingRoutingModule } from "./billing-routing.module";

// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   {path:'createbill',component:CreateBillComponent}
// ]


@NgModule({
  declarations: [
    HomeComponent,
    CreateBillComponent
  ],
  imports: [
    // RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[HomeComponent]
})
export class BillingModule { }
