import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';


@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit {
  hidden = true;
  num = 0;
  public isMenuCollapsed = true;
  cart: ProductsModel[];

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.cart = this._productsService.cart;
    this._productsService.cartSource.subscribe( cart =>{
      (this.num = cart.length);
      if(cart.length>0){
        this.hidden=false;
      }
    })
   
  }

}
