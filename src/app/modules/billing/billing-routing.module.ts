import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateBillComponent } from "./create-bill/create-bill.component";
// import { HomeComponent } from './modules/billing/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/layout/bill/home', pathMatch: 'full'
    },
    {path: 'home', component: HomeComponent},
    {path:'createbill',component:CreateBillComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BillingRoutingModule { }
