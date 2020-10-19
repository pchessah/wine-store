import { Component, OnInit } from '@angular/core';
import { ProductsService } from './libs/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sport-store';
  constructor(private service: ProductsService ){}

  ngOnInit(){}
}
