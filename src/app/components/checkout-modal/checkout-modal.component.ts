import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IOrders } from 'src/app/libs/interfaces/iorders';
import { OrdersModel } from 'src/app/libs/models/orders-model';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { OrdersService } from 'src/app/libs/services/orders.service';
import { ProductsService } from 'src/app/libs/services/products.service';
import { v4 as uniqueId } from "uuid";

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent implements OnInit {

  checkoutForm: any;
  products: ProductsModel[] = undefined;
  tempOrderNo: string;
  temOrderNoHolder: string;
  order: IOrders ={email:undefined,
                   firstName: undefined,
                   lastName:undefined,
                   orderNo: undefined,
                   products: this.products,
                   phoneNumber: undefined};

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<CheckoutModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private productService: ProductsService,
              private orderService: OrdersService,
              private toastr: ToastrService){}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      firstName:[""],
      lastName:[""],
      email:[""],
      phoneNumber:[""],
      orderNo:[""]
    })
    this.getOrderNo();
    this.products = this.data.products;
  }

    //CREATE NEW UNIQUE ORDER NO.
    getOrderNo(): void{
      this.tempOrderNo = uniqueId();
    }

    //CANCEL ORDER
    cancelOrder(): void{
      if(confirm("Are you sure you want to cancel this order?")){
        this.productService.clearCart();
        this.router.navigateByUrl("/home");        
      }
    }

    submitOrder():void{
      this.order.email = this.checkoutForm.value.email;
      this.order.firstName = this.checkoutForm.value.firstName;
      this.order.lastName = this.checkoutForm.value.lastName;
      this.order.orderNo = this.tempOrderNo;
      this.order.phoneNumber = this.checkoutForm.value.phoneNumber;
      this.order.products = this.products;
      this.toastr.success(`Order number: ${this.order.orderNo} submitted.`)
      this.orderService.submitOrder(this.order); 
    }
  

}
