import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/libs/services/products.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductsModel[];
  singleProduct: ProductsModel = this._productsService.singleProduct;
  cart: ProductsModel[] = this._productsService.cart;


  constructor(private _productsService: ProductsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this._productsService.getAllProducts().subscribe(products => {
      this.products = products.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as ProductsModel
      })
    });
  }

  //ADD ITEM TO CART, OPEN MODAL FOR THE ITEM
  addToCart(id): void {
    this._productsService.addToCart(id);

    // this._productsService.currentCart.pipe(take(1)).subscribe(cart => {
    //   if (cart.length > 0) {
    //     this.cart = cart;
    //   }
    // });

    // this._productsService.currentSingleProduct.pipe(take(1)).subscribe(singleProduct => {
    //   if (singleProduct !== null && singleProduct !== undefined) {
    //     this.singleProduct = singleProduct;
    //     console.log(this.singleProduct);
    //   }
    // })
  }

}

