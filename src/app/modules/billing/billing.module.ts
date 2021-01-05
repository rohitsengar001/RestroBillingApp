import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
// import { Routes, RouterModule } from '@angular/router';
import { CreateBillComponent } from './create-bill/create-bill.component';
// import { BillingRoutingModule } from "./billing-routing.module"; 
import { ReactiveFormsModule } from '@angular/forms';
import { BillingpdfComponent } from './billingpdf/billingpdf.component';
import { ViewbillComponent } from './viewbill/viewbill.component';

// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   {path:'createbill',component:CreateBillComponent}
// ]


@NgModule({
  declarations: [
    HomeComponent,
    CreateBillComponent,
    BillingpdfComponent,
    ViewbillComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[HomeComponent]
})
export class BillingModule { }
