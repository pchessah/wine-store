import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { IOrders } from '../interfaces/iorders';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore,
              private fireStorage: AngularFireStorage,
              private productService: ProductsService) { }


  submitOrder(order: IOrders){
    this.productService.submitCart();
    return this.firestore.collection("orders").add(order)
  }
}
