import { Component, OnInit, DoCheck } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-manage-bill',
  templateUrl: './manage-bill.component.html',
  styleUrls: ['./manage-bill.component.css'],
})
export class ManageBillComponent implements OnInit, DoCheck {
  // productItemList=[]
  dishes = [
    'MATAR PANEER',
    'SAHI PANEER',
    'VEG-VIRYANI',
    'SAHI KABAB',
    'MATAR KULCHA',
    'BURGER CHEESE',
    'VEG MAGGI',
    'PANEER TIKKA',
    'BUTTER NAAN',
  ];
  billObj;
  grandTotal=0
  itemListArray = [] //itemDetails of all objects
  billing = {
    'customerName': "",
    'billNo': "",
    'date': "",
    'address': "",
    'itemDetails': [],
    'grandTotal': 0
  }
  
  constructor(private billingService: BillingService) {}

  ngOnInit(): void {
    this.getAllBilling();
  }

  ngDoCheck() {
    // this.getAllBilling()
  }
  getAllBilling() {
    this.billingService.getAllBill().subscribe((info) => {
      this.billObj = info;
      this.billObj.forEach(obj => {
        this.itemListArray.push(obj.itemDetails)
      });
      
      // for(let obj of this.billObj) {
      //   this.itemList.push(obj.itemDetails)
      // }
      // console.log(this.itemListArray[0][0].itemName);
      // console.log(this.billObj);
    });
  }
setTotal(total){
  this.grandTotal=total
  // console.log("setgrandtotal",this.grandTotal);
}
//! add item into the list
  addItem(data,index,form){
    let addItemDetails = {
      itemName: data.itemNameField,
      price:data.priceField,
      quantity:data.quantityField
    }
    // console.log(addItemDetails)
    //?itemNameFile,priceFiled,quantity
    // this.addItemDetails.itemName=data.itemNameField
    // this.addItemDetails.price=data.priceField
    // this.addItemDetails.quantity=data.quantityField
    // console.log(addItemDetails)

    this.itemListArray[index].push(addItemDetails)
    // console.log(this.itemListArray);
    this.grandTotal=0
    this.itemListArray[index].forEach(element => {
      this.grandTotal+=element.price * element.quantity
      // console.log(element.price * element.quantity);
    });
    // console.log(form.form.controls.address.value);
    // console.log(this.grandTotal);
    // console.log(this.itemListArray[index]);
    // console.log(data);
  }
  //delte items into the dish
  deleteItem(i,j){
 this.itemListArray[i].splice(j,1)
 console.log(this.itemListArray[i]);
 this.grandTotal=0
 this.itemListArray[i].forEach(element => {
   this.grandTotal+=element.price * element.quantity
  console.log(element.price * element.quantity);
 });
  }
  //!to delete to the bill
  deleteBill(index,id){
    this.billingService.deleteBill(id).subscribe(info=>{
      // console.log('itemDelete successfully');
      let delBtn=document.getElementById('delete-close-'+index)
      delBtn.click()
      this.getAllBilling()
    })

  }
  updateForm(data,id,index){ //?data:<parameterlist> custName,date and address
    //set form data into bill object
    this.billing.customerName=data.custName;
    this.billing.date=data.date;
    this.billing.address=data.address;
    this.billing.grandTotal=data.grandTotal
    this.billing.itemDetails=this.itemListArray[index]
    this.billingService.editBill(this.billing,id).subscribe(info=>{
      // console.log('service is calling');
      this.getAllBilling()
    })
    let closebtn=document.getElementById('close-btn-'+index)
    closebtn.click()
    // console.log(data);
  }
}