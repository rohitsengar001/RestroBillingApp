import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service.js';
import * as CanvasJS from '../../../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  dataObj
  weekDates = []
  objArray = []
  sumPrice = 0
  grandTotal = []
  flag: boolean
  constructor(private billingservice: BillingService) { }

  ngOnInit(): void {
    let dt = new Date();
    let date = dt.getDate()
    let month = dt.getMonth() + 1
    let year = dt.getFullYear()
    let totalsum = 0
    //get all availabe bill
    this.billingservice.getAllBill().subscribe(info => {
      this.dataObj = info
      console.log(this.dataObj);
    })
    //determine last 7 days date
    for (let i = 0; i < 7; i++) {
      if (date == 0) {
        date = 31;
        month--;
      }
      if (month == 0) {
        month = 12
        year--
      }
      this.weekDates[i] = year + "-" + month + "-" + date;
      date--;
    }
    //datewise data store into objArray

    console.log(this.weekDates)

    //!check this data
    this.getttingWeeklyData()
    this.objArray.forEach((outer, index) => {
      console.log(outer, "outerloop-", index);
      outer.forEach(inner => {
        // this.sumPrice = inner.grandTotol
        this.sumPrice = (this.sumPrice || 0) + (inner.grandTotol)
        console.log(inner.grandTotal, "innerloop")
      });

    });


    this.showTotal()
    setTimeout(() => {
      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Sale chart :Last 7 days"
        },
        data: [{
          type: "column",
          dataPoints: [
            { y: this.grandTotal[0], label: this.weekDates[0] },
            { y: this.grandTotal[1], label: this.weekDates[1] },
            { y: this.grandTotal[2], label: this.weekDates[2] },
            { y: this.grandTotal[3], label: this.weekDates[3] },
            { y: this.grandTotal[4], label: this.weekDates[4] },
            { y: this.grandTotal[5], label: this.weekDates[5] },
            { y: this.grandTotal[6], label: this.weekDates[6] },
          ]
        }]
      });

      chart.render();
      //pie chart
      
    }, 1500);
  }
  //ngonit end

  ngAfterViewInit() {

    // console.log(this.objArray)
  }

  async getttingWeeklyData() {
    this.weekDates.forEach((wdate) => {
      this.billingservice.getbill(this.formatDate(wdate)).subscribe(info => {
        // const data = await info
        this.objArray.push(info)
        console.log(info)
      })
      // console.log((wdate));
    })
    setTimeout(() => {
      let data: number
      this.objArray.forEach((outer, index) => {
        this.flag = false
        this.sumPrice = 0
        outer.forEach((inner) => {
          inner.grandTotal
          this.sumPrice = (this.sumPrice || 0) + (inner.grandTotal)
          console.log(this.sumPrice, "innerloop")
          this.flag = true

        });

        if (this.flag) {

          this.grandTotal[index] = this.sumPrice + this.sumPrice * 18 / 100
        }
        else {
          this.grandTotal[index] = 0

        }
      })
      console.log(this.sumPrice)
    }, 1000)
  }

  showTotal() {
    setTimeout(() => {
      console.log(this.sumPrice);
      console.log(this.grandTotal);
    }, 1500);
  }
  //change date into format yyyy-mm-dd 
  //?data:"yyy-mm-dd"
  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

}
