import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/libs/interfaces/iproducts';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})

export class CartModalComponent implements OnInit {
  singleProduct;
  cart: [] = [];
  cartWithcounter = {};


  constructor(public dialogRef: MatDialogRef<CartModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,
    private productService: ProductsService,
    private router: Router) {
    this.singleProduct = this.data.product;
    this.cart = this.data.cart;
    this.productService.calculateCart(this.cart, this.cartWithcounter);
  }

  ngOnInit(): void {
    this.productService.currentCart.subscribe(cart => this.cart = cart)
  }

  // calculateCart(cart: [], counter) {
  //   cart.forEach(function (obj) {
  //     let key = JSON.stringify(obj);
  //     counter[key] = (counter[key] || 0) + 1;
  //     console.log(counter);
  //     return counter
  //   })
  // }

  goToCart(): void{
    this.close();
    this.productService.updateCart(this.cart)

    this.router.navigateByUrl("/cart")
  }



  close(): void {
    this.dialogRef.close();
  }

}
