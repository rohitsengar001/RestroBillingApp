import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/bill/home', pathMatch: 'full',canActivate:[AuthGuard] },
            {
                path: 'bill', loadChildren: () => import('../billing/billing.module').then(m => m.BillingModule)
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
