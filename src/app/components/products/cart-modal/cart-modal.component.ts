import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProducts } from 'src/app/libs/interfaces/iproducts';
import { ProductsModel } from 'src/app/libs/models/products-model';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})

export class CartModalComponent implements OnInit {
  singleProduct;

  constructor(public dialogRef: MatDialogRef<CartModalComponent>,
             @Optional() @Inject(MAT_DIALOG_DATA) public data: IProducts){ 
               this.singleProduct = data;
             }

  ngOnInit(): void { }

}
