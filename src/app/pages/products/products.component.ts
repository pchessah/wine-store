import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/libs/interfaces/iproducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProducts[];

  constructor() { }

  ngOnInit(): void {
  }

}
