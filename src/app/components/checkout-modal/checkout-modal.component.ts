import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { IOrders } from 'src/app/libs/interfaces/iorders'
import { ProductsModel } from 'src/app/libs/models/products-model'
import { OrdersService } from 'src/app/libs/services/orders.service'
import { ProductsService } from 'src/app/libs/services/products.service'
import { v4 as uniqueId } from 'uuid'
import { init } from 'emailjs-com'
import emailjs from 'emailjs-com'
init('user_jqv22nq1EoErcPSB7fv8A')



@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss'],
})
export class CheckoutModalComponent implements OnInit {
  checkoutForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    deliveryAddress: ['', [Validators.required]],
    county: ['', [Validators.required]],
    orderNo: [''],
  })
  products: ProductsModel[] = undefined
  tempOrderNo: string
  temOrderNoHolder: string
  order: IOrders = {
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    orderNo: undefined,
    products: this.products,
    deliveryAddress: undefined,
    county: undefined,
    phoneNumber: undefined,
    grandTotal: undefined,
  }

  productsForAdmin: string
  whatsAppUrl: string
  whatsAppMessage: string

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CheckoutModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private productService: ProductsService,
    private orderService: OrdersService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getOrderNo()
    this.products = this.data.products
  }

  //CREATE NEW UNIQUE ORDER NO.
  getOrderNo(): void {
    this.tempOrderNo = uniqueId()
  }

  //CANCEL ORDER
  cancelOrder(): void {
    if (confirm('Are you sure you want to cancel this order?')) {
      this.productService.clearCart()
      this.dialogRef.close()
      this.router.navigateByUrl('/')
    }
  }

  //SUBMIT ORDER
  submitOrder(): void {
    this.order.email = this.checkoutForm.value.email
    this.order.firstName = this.checkoutForm.value.firstName
    this.order.lastName = this.checkoutForm.value.lastName
    this.order.orderNo = this.tempOrderNo
    this.order.phoneNumber = this.checkoutForm.value.phoneNumber
    this.order.deliveryAddress = this.checkoutForm.value.deliveryAddress
    this.order.county = this.checkoutForm.value.county
    this.order.products = this.products
    this.order.grandTotal = this.data.total

    this.orderService.submitOrder(this.order)
    this.toastr.success(
      `Order number: ${this.order.orderNo} submitted. An email has been sent to ${this.order.email}`,
    )
    this.getProductsForAdmin()
    this.emailToCustomer()
    this.emailToAdmin()
    // this.whatsappAdmin();
    this.dialogRef.close()
    this.router.navigateByUrl('/')
  }

  getProductsForAdmin(): void {
    let products = this.order.products.map((item) => item['productName'])
    products.sort()
    let finalProductCount = ''

    let current = null
    let count = 0

    for (let i = 0; i < products.length; i++) {
      if (products[i] != current) {
        if (count > 0) {
          finalProductCount += ` \n Product: ${current} Quantity: ${count}, `
        }
        current = products[i]
        count = 1
      } else {
        count++
      }
    }
    if (count > 0) {
      finalProductCount += ` \n Product: ${current}, Quantity: ${count}  `
    }
    this.productsForAdmin = finalProductCount
  }

  //EMAIL TO CUSTOMER
  emailToCustomer(): void {
    const templateParams = {
      to_email: this.order.email,
      from_name: 'Asconi Wines',
      message: `Your order has been received and is being processed.`,
      order: this.productsForAdmin,
      order_no: this.order.orderNo,
      county: this.order.county,
      delivery_address: this.order.deliveryAddress,
    }

    emailjs
      .send(
        'service_vspckw9',
        'template_5pegs3f',
        templateParams,
        'user_jqv22nq1EoErcPSB7fv8A',
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
        },
        (err) => {
          console.log('FAILED...', err)
        },
      )
  }

  //EMAIL TO ADMIN
  emailToAdmin(): void {
    const templateParams = {
      customer_email: this.order.email,
      customer_phone_no: this.order.phoneNumber,
      message: this.productsForAdmin,
      grand_Total: this.order.grandTotal,
      order_no: this.order.orderNo,
      firstName: this.order.firstName,
      lastName: this.order.lastName,
      county: this.order.county,
      delivery_address: this.order.deliveryAddress,
    }

    emailjs
      .send(
        'service_vspckw9',
        'template_zpo9m5r',
        templateParams,
        'user_jqv22nq1EoErcPSB7fv8A',
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
        },
        (err) => {
          console.log('FAILED...', err)
        },
      )
  }

  //SEND TO ADMIN WHATSAPP
  whatsappAdmin(): void {
    this.order.email = this.checkoutForm.value.email
    this.order.firstName = this.checkoutForm.value.firstName
    this.order.lastName = this.checkoutForm.value.lastName
    this.order.orderNo = this.tempOrderNo
    this.order.phoneNumber = this.checkoutForm.value.phoneNumber
    this.order.deliveryAddress = this.checkoutForm.value.deliveryAddress
    this.order.county = this.checkoutForm.value.county
    this.order.products = this.products
    this.order.grandTotal = this.data.total
    this.orderService.submitOrder(this.order)
    this.toastr.success(`Order number: ${this.order.orderNo} submitted.`)
    this.getProductsForAdmin()

    this.whatsAppMessage = `Hi, my name is ${this.order.firstName} ${this.order.lastName}. I would like the following wines from your site: ${this.productsForAdmin} delivered at ${this.order.deliveryAddress} in ${this.order.county}county which comes to a grand total of ${this.order.grandTotal}`
    this.whatsAppUrl = `https://api.whatsapp.com/send?phone=254710172473&text=%20${this.whatsAppMessage}`
    window.open(this.whatsAppUrl, '_blank')

    this.dialogRef.close()
    this.router.navigateByUrl('/')
  }

  close(): void {
    this.dialogRef.close()
  }
}
