import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  random: any[]=[]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.currentCart.subscribe(cart => {
      this.cart = cart;
      this.calculateCart(this.cart)
      this.dataSource = new MatTableDataSource(this.cart);
    })
  }


  calculateCart(cart) {
    let counter = {}
    cart.forEach(function (obj) {
      var key = JSON.stringify(obj)
      counter[key] = (counter[key] || 0) + 1;
    })

    for (const [key, value] of Object.entries(counter)) {
      this.random=[...this.random,[`${key}, ${value}`]]
    }



  }






}
