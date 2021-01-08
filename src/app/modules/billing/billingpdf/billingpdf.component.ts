import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billingpdf',
  templateUrl: './billingpdf.component.html',
  styleUrls: ['./billingpdf.component.css']
})
export class BillingpdfComponent implements OnInit {
  billObj
  originalObj
  addressCustArray
  date
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.date=new Date()
    this.originalObj=this.route.snapshot.paramMap.get('billing')
    this.billObj=JSON.parse(this.originalObj)
    this.addressCustArray=this.billObj.address.split('\n');
    // console.log(this.billObj);
    // console.log(this.billObj.address.split('\n')[0]);
  }

  printPdf(){
    window.print()
  }


}
