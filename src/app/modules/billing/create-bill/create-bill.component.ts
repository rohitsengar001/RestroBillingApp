import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  billReactiveForm: FormGroup;
  addItems = []; //?itemName:"",quantity:'',price:''
  dishes = ['MATAR PANEER', 'SAHI PANEER', 'VEG-VIRYANI', 'SAHI KABAB', 'MATAR KULCHA', 'BURGER CHEESE', 'VEG MAGGI', 'PANEER TIKKA', 'BUTTER NAAN'];
  bill = {
    'customerName': "",
    'billNo': "",
    'date': "",
    'address': "",
    'itemDetails': this.addItems,
    'grandTotal': 0
  }
  successFlag:boolean=false;
  constructor(private billingService:BillingService,private router:Router) { }

  ngOnInit(): void {
    //reactive form
    this.billReactiveForm = new FormGroup({
      'personalDetails': new FormGroup({
        'customerName': new FormControl(null, [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]),
        'billNo': new FormControl({ value: null, disabled: true }, [Validators.nullValidator]),
        'date': new FormControl(null, [Validators.required]),
        'address': new FormControl(null, [Validators.required, Validators.maxLength(35)])
      }),
      'addItemDetails': new FormGroup({
        'itemName': new FormControl(null),
        'quantity': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
        'price': new FormControl(null, [Validators.required, Validators.min(1)])
      }),
    });
  }
  onBillSubmit() {
    //?fetch customerName ,billno,date and address 
    //also set the bill object and pass further for api calling 
    //for posting data at api
    // console.log(this.billReactiveForm);
    this.bill.customerName = this.billReactiveForm.get('personalDetails.customerName').value;
    this.bill.date = this.billReactiveForm.get('personalDetails.date').value;
    this.bill.address = this.billReactiveForm.get('personalDetails.address').value;
    // this.bill.customerName=this.billReactiveForm.get('personalDetails.customerName').value;
    // console.log(this.bill);
    alert('Are you sure to submit!')
    this.billingService.postBill(this.bill).subscribe((info)=>{
      this.successFlag=true;
      // console.log(info);
    });
    this.billReactiveForm.reset();
    setTimeout(() => {
      setTimeout(() => {
        this.router.navigate(['/billingpdf',{billing:JSON.stringify(this.bill)}])
      });
    }, 3000);
  }

  
  addItem() {
    let intialTotal = 0
    this.addItems.push({
      'itemName': this.billReactiveForm.get('addItemDetails.itemName').value,
      'quantity': this.billReactiveForm.get('addItemDetails.quantity').value,
      'price': this.billReactiveForm.get('addItemDetails.price').value,
    });
    // console.log(this.addItems);
    // console.log(this.billReactiveForm);
    this.addItems.forEach((total) => {
      intialTotal = (total.price) * (total.quantity)
    });
    // console.log(intialTotal)
    this.bill.grandTotal += intialTotal
    //  console.log("grandtotal:",this.bill.grandTotal);
    this.billReactiveForm.get('addItemDetails').reset();//reset the field of add item container
  }
  removeItem(index) {
    this.addItems.splice(index, 1);
  }


}


