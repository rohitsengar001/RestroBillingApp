import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  billReactiveForm: FormGroup;
  addItems = [];
  constructor() { }

  ngOnInit(): void {
    //reactive form
    this.billReactiveForm = new FormGroup({
      'personalDetails': new FormGroup({
        'customerName': new FormControl(),
        'billNo': new FormControl(),
        'date': new FormControl(),
        'address': new FormControl()
      }),
      'addItemDetails': new FormGroup({
        'itemName': new FormControl(),
        'quantity': new FormControl(),
        'price': new FormControl()
      }),
      'tableContent':new FormGroup({
        '_dishName':new FormControl(),
        '_quantity':new FormControl(),
        '_price':new FormControl(),
        '_totalPrice':new FormControl(),
      })
    });
  }

  onBillSubmit() {
    console.log("bill on submit");
    
  }
  addItem() {
    this.addItems.push({
      'itemName': this.billReactiveForm.get('addItemDetails.itemName').value,
      'quantity': this.billReactiveForm.get('addItemDetails.quantity').value,
      'price': this.billReactiveForm.get('addItemDetails.price').value,
    });
    this.billReactiveForm.get('addItemDetails').reset();//reset the field of add item container
    console.log(this.billReactiveForm.get('tableContent').value);
  }
  removeItem(index) {
    this.addItems.splice(index, 1);
  }

}


