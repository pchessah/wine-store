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
import { Email } from "../../../assets/smtp";

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent implements OnInit {

  checkoutForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["",Validators.required, Validators.email],
    phoneNumber: ["", Validators.required],
    orderNo: ["", Validators.required]
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
    this.toastr.success(`Order number: ${this.order.orderNo} submitted.`)
    this.orderService.submitOrder(this.order);
    this.dialogRef.close();
    this.router.navigateByUrl("/home");
  }

  //EMAIL TO CUSTOMER
  emailToCustomer(): void {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "paulchesa1@gmail.com",
      Password: "E705258C9626F2222131A696BE431A34BAFC",
      To: this.order.email,
      From: 'paulchesa1@gmail.com',
      Subject: `Order No. ${this.order.orderNo}`,
      Body: `Your Order  ${this.order.orderNo} has been confirmed`
    })
  }


}
