import { Component, ElementRef, OnInit, Renderer2, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  // @ViewChild('addItemBtn') divAddBtn:ElementRef;
  //  @ViewChild('addItemDetails') addItemDetails:ElementRef;
  constructor(private divAddBtn:ElementRef,private renderer:Renderer2) {
    console.log(divAddBtn.nativeElement);
    // this.renderer.nativeElement.onclick=()=>{
    //   console.log(addItemDetails.nativeElement);
    //   addItemDetails.nativeElement.style.display='inline-block';
    // };
  }
  
  ngOnInit(): void {
  }
 

  }


