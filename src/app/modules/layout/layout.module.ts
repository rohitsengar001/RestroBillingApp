import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BillingModule } from '../billing/billing.module';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavbarComponent, LayoutComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    BillingModule,
    LayoutRoutingModule
  ],
  // exports:[HeaderComponent,FooterComponent,SidenavbarComponent,LayoutComponent]
})
export class LayoutModule { }
