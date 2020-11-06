import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: ProductsModel[];
  displayedColumns: string[] = ['productName', 'number', 'price', 'total'];
  dataSource;
  displayCart: any[] = [];
  grandTotal: number;
  grandTotalArray: any[] = [];



  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.currentCart.subscribe(cart => {
      this.cart = cart;
      this.calculateCart(this.cart)
      this.dataSource = new MatTableDataSource(this.displayCart);
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

  clearCart() {
    this.productsService.clearCart();
  }

  removeOneItem(id): void {
    this.productsService.removeOneItemFromCart(id);
    this.displayCart = [];
    this.grandTotalArray = [];
  }

  addOneItem(id): void {
    this.productsService.addOneItemToCart(id);
    this.displayCart = [];
    this.grandTotalArray = [];
  }

  checkout(): void {
    if (confirm("Confirm to proceed to checkout")) {
      this.router.navigateByUrl("/checkout")
    } else {
      this.router.navigateByUrl("/cart")
    }
  }

  back(): void{
    this.router.navigateByUrl("/products")
  }

}
