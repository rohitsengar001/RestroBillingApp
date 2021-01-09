import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateBillComponent } from "./create-bill/create-bill.component";
import { ViewbillComponent } from './viewbill/viewbill.component';
import { ManageBillComponent } from './manage-bill/manage-bill.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CreatBillGuard } from 'src/app/guards/creat-bill.guard';
// import { BillingpdfComponent } from './billingpdf/billingpdf.component';
// import { HomeComponent } from './modules/billing/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
    },
    {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
    {path:'createbill',component:CreateBillComponent,canActivate:[AuthGuard],canDeactivate:[CreatBillGuard]},
    {path:'viewbill',component:ViewbillComponent,canActivate:[AuthGuard]},
    {path:'manage-bill',component:ManageBillComponent,canActivate:[AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BillingRoutingModule { }
