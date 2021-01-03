import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule  } from "./modules/layout/layout.module";
import { BillingModule } from "../app/modules/billing/billing.module";
import { BillingService } from './services/billing.service';
// import { HomeComponent } from './modules/billing/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LayoutModule,
    // BillingModule
    
  ],
  providers: [BillingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
