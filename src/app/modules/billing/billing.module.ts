import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
// import { Routes, RouterModule } from '@angular/router';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { BillingRoutingModule } from "./billing-routing.module"; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingpdfComponent } from './billingpdf/billingpdf.component';
import { ViewbillComponent } from './viewbill/viewbill.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
import { ChartsModule } from '../charts/charts.module';
import { TodoModule } from '../todo/todo.module';

@NgModule({
  declarations: [
    HomeComponent,
    CreateBillComponent,
    BillingpdfComponent,
    ViewbillComponent,
    ManageBillComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    BillingRoutingModule,
    MatPaginatorModule,
    FormsModule,
    ChartsModule,
    TodoModule
  ],
  exports:[HomeComponent]
})
export class BillingModule { }
