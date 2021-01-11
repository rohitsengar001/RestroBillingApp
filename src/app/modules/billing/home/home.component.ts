import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  billObj
  totalMonthlyRevenue:number=0
  constructor(private billingservice:BillingService) { }
  ngOnInit(): void {
    this.geetingRevenue()
    setTimeout(() => {
      this.billObj.forEach(element => {
        this.totalMonthlyRevenue+=element.grandTotal+(element.grandTotal*18)/100
      });
      // console.log(this.totalMonthlyRevenue);
    }, 500  );
  }

  async geetingRevenue(){
    this.billingservice.getAllBill().subscribe(info=>{
      this.billObj=info
      // console.log(info);
    })
    
  }

}
