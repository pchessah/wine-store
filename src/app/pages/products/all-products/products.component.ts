import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/libs/interfaces/iproducts';
import { ProductsService } from 'src/app/libs/services/products.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartModalComponent } from 'src/app/components/products/cart-modal/cart-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProducts[];
  singleProduct: IProducts;


  constructor(private _productsService: ProductsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this._productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(id): void {
    this._productsService.getSingleProduct(id).subscribe(singleProduct =>{
      this.singleProduct = singleProduct;
      const dialogRef = this.dialog.open(CartModalComponent, {
        width: '550px',
        data: this.singleProduct,
      });  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
      });
    })
   

  }

}
