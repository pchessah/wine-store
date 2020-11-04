import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent implements OnInit {

  checkoutForm: any;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      firstName:[""],
      lastName:[""],
      email:[""],
      phoneNumber:[""],
      orderNo:[""]
    })
   }

  ngOnInit(): void {
  }

}
