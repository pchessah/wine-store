import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IOrders } from 'src/app/libs/interfaces/iorders';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { OrdersService } from 'src/app/libs/services/orders.service';
import { ProductsService } from 'src/app/libs/services/products.service';
import { v4 as uniqueId } from "uuid";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_s3GXm5gpAGyKt7rNl9Qfb");

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent implements OnInit {

  checkoutForm = this.fb.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["",[Validators.required]],
    phoneNumber: ["", [Validators.required]],
    orderNo: [""]
  })
  products: ProductsModel[] = undefined;
  tempOrderNo: string;
  temOrderNoHolder: string;
  order: IOrders = {
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    orderNo: undefined,
    products: this.products,
    phoneNumber: undefined,
    grandTotal: undefined
  };



  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<CheckoutModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private productService: ProductsService,
    private orderService: OrdersService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
   
    this.getOrderNo();
    this.products = this.data.products;
  }

  //CREATE NEW UNIQUE ORDER NO.
  getOrderNo(): void {
    this.tempOrderNo = uniqueId();
  }

  //CANCEL ORDER
  cancelOrder(): void {
    if (confirm("Are you sure you want to cancel this order?")) {
      this.productService.clearCart();
      this.dialogRef.close();
      this.router.navigateByUrl("/home");
    }
  }

  //SUBMIT ORDER
  submitOrder(): void {
    this.order.email = this.checkoutForm.value.email;
    this.order.firstName = this.checkoutForm.value.firstName;
    this.order.lastName = this.checkoutForm.value.lastName;
    this.order.orderNo = this.tempOrderNo;
    this.order.phoneNumber = this.checkoutForm.value.phoneNumber;
    this.order.products = this.products;
    this.order.grandTotal = this.data.total;

    this.orderService.submitOrder(this.order);
    this.toastr.success(`Order number: ${this.order.orderNo} submitted. An email has been sent to ${this.order.email}`)
    this.emailToCustomer();
    this.emailToAdmin();
    this.dialogRef.close();
    this.router.navigateByUrl("/home");
  }

  //EMAIL TO CUSTOMER
  emailToCustomer(): void {
    const templateParams = {
      to_email: this.order.email,
      from_name: 'Asconi Wines',
      message: `Your order ${this.order.orderNo} has been received and is being processed.`,
      order_no: this.order.orderNo
  };
   
  emailjs.send('service_csyz6nw','template_j0w73t8', templateParams, 'user_s3GXm5gpAGyKt7rNl9Qfb')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
  }


  //EMAIL TO ADMIN
  emailToAdmin():void{
    const templateParams = {
      customer_email: this.order.email,
      customer_phone_no: this.order.phoneNumber,
      message: this.order.products.filter(item=>{
        return item.productName;
      }),
      grand_Total: this.order.grandTotal,
      order_no: this.order.orderNo,
      firstName: this.order.firstName,
      lastName: this.order.lastName
  };
   
  emailjs.send('service_csyz6nw','template_8gkys9i', templateParams, 'user_s3GXm5gpAGyKt7rNl9Qfb')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });

  }


}
