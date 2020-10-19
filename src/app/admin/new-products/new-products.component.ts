import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

  productsForm =  this.fb.group({
    productId: [''],
    productName: [""],
    category: [""],
    imgUrl:[""],
    price:[""]
  })

  product: ProductsModel;

  constructor( private fb: FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  createNewProduct(): void{
    this.product = this.productsForm.value;    
  }

  onSubmit(): void{
    this.createNewProduct();
    this.productsService.addNewProduct(this.product);  
  }

}
