import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateBillComponent } from "./create-bill/create-bill.component";
import { ViewbillComponent } from './viewbill/viewbill.component';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
// import { BillingpdfComponent } from './billingpdf/billingpdf.component';
// import { HomeComponent } from './modules/billing/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/layout/bill/home', pathMatch: 'full'
    },
    {path: 'home', component: HomeComponent},
    {path:'createbill',component:CreateBillComponent},
    {path:'viewbill',component:ViewbillComponent},
    {path:'manage-bill',component:ManageBillComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BillingRoutingModule { }
