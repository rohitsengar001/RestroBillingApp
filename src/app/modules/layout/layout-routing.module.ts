import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent,
    
},
{path:'dashboard',redirectTo:"dashboard/bill/home",pathMatch:'full'},
    {
        path: 'dashboard',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard/bill', pathMatch: 'full' },
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
