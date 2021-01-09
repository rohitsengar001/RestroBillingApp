import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule  } from "./modules/layout/layout.module";
import { BillingModule } from "../app/modules/billing/billing.module";
import { BillingService } from './services/billing.service';
import {  HttpClientModule } from '@angular/common/http';
import { LineBreakPipePipe } from './line-break-pipe.pipe';
// import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatBillGuard } from './guards/creat-bill.guard';
// import { HomeComponent } from './modules/billing/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LineBreakPipePipe,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [BillingService,CreatBillGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
