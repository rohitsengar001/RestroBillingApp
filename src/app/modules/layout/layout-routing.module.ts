import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/layout/bill/', pathMatch: 'full' },
            {
                path: 'bill', loadChildren: () => import('../billing/billing-routing.module').then(m => m.BillingRoutingModule)
            },
            // {path:'viewallbill',component:''}
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
