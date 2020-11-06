import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  constructor(private router: Router,
    private _productService: ProductsService,
    private route: ActivatedRoute) { }
  
  
  singleProduct: ProductsModel;

  ngOnInit(): void {
    this.getSingleProduct()
  }

  getSingleProduct(): void {
    const id = this.route.snapshot.paramMap.get("id");    
    this._productService.getSingleProduct(id).subscribe((singleProduct : ProductsModel)=>{
      this.singleProduct = singleProduct;
    })
  }

  addToCart(): void {
    const id = this.route.snapshot.paramMap.get("id");    
    this._productService.getSingleProduct(id).subscribe((singleProduct : ProductsModel)=>{
      this.singleProduct = singleProduct;
      this._productService.addToCart(id);
    })    
  }

  goBack(): void{
    this.router.navigateByUrl("/products")
  }


}
