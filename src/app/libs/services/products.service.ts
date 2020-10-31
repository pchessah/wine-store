import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsModel } from "../models/products-model";
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {

  products: ProductsModel[];
  singleProduct: ProductsModel = undefined;
  cart: ProductsModel[] = []
  private singleProductSource = new BehaviorSubject<ProductsModel>(null);
  cartSource = new BehaviorSubject<ProductsModel[]>([]);
  currentCart = this.cartSource.asObservable();
  currentSingleProduct = this.singleProductSource.asObservable();

  constructor(private firestore: AngularFirestore, private fireStorage: AngularFireStorage, private toastr: ToastrService) { }

  ngOnInit(): void { }

  

  //UPDATE CART AS OBSERVABLE
  updateCart(cart: ProductsModel[]) {
    this.cartSource.next(cart)
  }

  //UPDATE SINGLE PRODUCT AS OBSERVABLE
  updateSingleProduct(singleProduct: ProductsModel) {
    this.singleProductSource.next(singleProduct)
  }


 //CHECK ERRORS WITH HTTP CALLS
  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    //check if error is on the client side
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`
    } else {
      //else error is server side
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  
  //GET ALL PRODUCTS
  getAllProducts() {
    return this.firestore.collection("products").snapshotChanges().pipe(
      catchError(this.handleError)
    );
  }
  

  //GET SINGLE ITEM VIA ID
  getSingleProduct(id: string) {
    return this.firestore.collection("products").doc(id).valueChanges().pipe(
      catchError(this.handleError)
    );
  }

  //ADD NEW PRODUCT TO FIREBASE
  addNewProduct(product: ProductsModel) {
    return this.firestore.collection("products").add(product)
  }

  //ADD ITEM TO CART
  addToCart(id) {
    this.getSingleProduct(id).subscribe((singleProduct: ProductsModel) => {     
      if(this.singleProduct !== null || this.singleProduct !== undefined){
        this.singleProduct = singleProduct;       
        this.updateSingleProduct(this.singleProduct);
        this.toastr.success(`${this.singleProduct.productName} added to cart`);   
        this.cart = [...this.cart, this.singleProduct];
        this.updateCart(this.cart);
      }
    })
  }

  //service to be improved
  


  
  //CLEAR CART
  clearCart(){
    this.cart = [];
    this.updateCart(this.cart);
  }

  //REMOVE ONE ITEM
  removeOneItem(id){
    console.log(id);
 
  }

  //UPLOAD FUNCTION
  uploadSingleFile(event, n) {
    const file = event.target.files[0];
    const task = this.fireStorage.upload(`productImages/${n}`, file);
    return task.snapshotChanges()
  }
}
