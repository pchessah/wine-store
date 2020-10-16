import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/libs/interfaces/iproducts';
import { ProductsService } from 'src/app/libs/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProducts[];
  arr = [1,2,3,4]

  constructor( private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void{
    this._productsService.getAllProducts().subscribe( products =>{
      this.products = products;
    });  
  }

}
