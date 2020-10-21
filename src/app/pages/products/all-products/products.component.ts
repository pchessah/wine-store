import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/libs/interfaces/iproducts';
import { ProductsService } from 'src/app/libs/services/products.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartModalComponent } from 'src/app/components/products/cart-modal/cart-modal.component';
import { ToastrService } from 'ngx-toastr';
import { ProductsModel } from 'src/app/libs/models/products-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductsModel[];
  singleProduct: any;
  cart: IProducts[] = [];


  constructor(private _productsService: ProductsService,
              public dialog: MatDialog,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  showSuccess(singleProduct) {
    this.toastr.success( `${singleProduct} added to cart.`);
  }

  getAllProducts(): void {
    this._productsService.getAllProducts().subscribe(products => {
      this.products = products.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as ProductsModel
      })      
    });
  }

  addToCart(id): void {
    this._productsService.getSingleProduct(id).subscribe(singleProduct=>{
      this.singleProduct =  singleProduct;
      const dialogRef = this.dialog.open(CartModalComponent, {
        width: "500px",
        data: this.singleProduct
      })
     
    })  
  }

}
