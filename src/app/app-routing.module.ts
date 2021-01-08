import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingpdfComponent } from './modules/billing/billingpdf/billingpdf.component';
// import { HomeComponent } from './modules/billing/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/layout/login', pathMatch: 'full'},
  {path: 'layout', loadChildren: () => import('./modules/layout/layout-routing.module').then(m => m.LayoutRoutingModule)},
  {path:"billingpdf",component:BillingpdfComponent},
  // {path:'layout/dashboard',redirectTo:}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
