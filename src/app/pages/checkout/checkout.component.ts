import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CheckoutModalComponent } from 'src/app/components/checkout-modal/checkout-modal.component';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cart: ProductsModel[];
  displayCart: any[] = [];
  grandTotal: number;
  grandTotalArray: any[] = [];

  constructor(private productsService: ProductsService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productsService.cartSource.subscribe(cart => {
      this.cart = cart;
      this.calculateCart(this.cart);
    })
  }

  calculateCart(cart) {
    let counter = {}
    cart.forEach(function (obj) {
      var key = JSON.stringify(obj)
      counter[key] = (counter[key] || 0) + 1;
    })
    for (const [key, value] of Object.entries(counter)) {
      let singleProduct = JSON.parse(key);
      this.displayCart = [...this.displayCart, [singleProduct, +value]];
      let total = singleProduct.price * (+value)
      this.grandTotalArray = [...this.grandTotalArray, total];
    }
    this.grandTotal = this.grandTotalArray.reduce((a, b) => a + b, 0);
  }

  editOrder(): void {
    this.router.navigateByUrl("/cart")
  }

  cancelOrder(): void {
    if (confirm("Are you sure you want to cancel the order?")) {
      this.productsService.clearCart();
      this.router.navigateByUrl("/");
    } else {
      this.router.navigateByUrl("/checkout")
    }
  }

  submitOrder(): void {
    const dialogRef =  this.dialog.open(CheckoutModalComponent, {
      width: '550px',
      data: {products: this.cart, total: this.grandTotal, cartWithNumber: this.displayCart}
    })
  }

}
