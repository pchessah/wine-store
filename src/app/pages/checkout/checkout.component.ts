import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cart: ProductsModel[];

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.cartSource.subscribe(cart=>{
      this.cart = cart;
    })

  }

}
