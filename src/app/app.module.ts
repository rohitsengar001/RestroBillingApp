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
import { LoginGuard } from './guards/login.guard';
import { LoginService } from './services/login.service';
// import { HomeComponent } from './modules/billing/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LineBreakPipePipe,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatTableModule,
    BrowserAnimationsModule
      // LayoutModule,
    // BillingModule
    
  ],
  providers: [BillingService,LoginGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
