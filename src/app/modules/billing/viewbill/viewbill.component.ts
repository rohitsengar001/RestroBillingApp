import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BillingService } from 'src/app/services/billing.service';

export interface PeriodicElement {
  CustomerName: string;
  position: number;
  grandToatal: number;
  date: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrls: ['./viewbill.component.css']
})
export class ViewbillComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['position', 'customerName', 'date', 'grandTotal'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource
  user
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort,{static:false}) sort: MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  constructor(private billingService:BillingService){}
  ngOnInit(){
    this.getAllBill()
  }
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }
  getAllBill(){
    this.billingService.getAllBill().subscribe((info:any)=>{
      this.user=info
      

      this.dataSource = new MatTableDataSource(info);
      // this.dataSource = info;
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
      console.log(this.dataSource);
    })
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }
}
