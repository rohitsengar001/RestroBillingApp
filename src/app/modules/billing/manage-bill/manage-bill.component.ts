import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-manage-bill',
  templateUrl: './manage-bill.component.html',
  styleUrls: ['./manage-bill.component.css']
})
export class ManageBillComponent implements OnInit {
  billObj
  constructor(private billingService:BillingService) { }

  ngOnInit(): void {
    this.getAllBilling()
  }
  getAllBilling(){
    this.billingService.getAllBill().subscribe((info)=>{
      this.billObj=info
      console.log(info);
    })
  }

}
