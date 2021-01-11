import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';



@NgModule({
  declarations: [BarchartComponent, PiechartComponent],
  imports: [
    CommonModule
  ],
  exports:[BarchartComponent,PiechartComponent]
})
export class ChartsModule { }
