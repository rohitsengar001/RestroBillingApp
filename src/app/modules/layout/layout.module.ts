import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BillingModule } from '../billing/billing.module';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavbarComponent, LayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    BillingModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ],
  // exports:[HeaderComponent,FooterComponent,SidenavbarComponent,LayoutComponent]
})
export class LayoutModule { }
