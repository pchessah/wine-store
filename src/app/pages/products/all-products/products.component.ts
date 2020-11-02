import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/libs/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsModel } from 'src/app/libs/models/products-model';

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
  }

}

