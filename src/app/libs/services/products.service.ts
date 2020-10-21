import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProducts } from '../interfaces/iproducts';
import { tap, catchError } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsModel } from "../models/products-model";
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProducts[];
  productsUrl="api/products";
  httpOptions = { headers: new HttpHeaders({"Content-type": "application/json"})}

  constructor( private http: HttpClient, private firestore: AngularFirestore,  private fireStorage: AngularFireStorage ) { }

  handleError(err: HttpErrorResponse){
    let errorMessage = "";
    //check if error is on the client side
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`
    } else {
      //else error is server side
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getAllProducts(){
  return this.firestore.collection("products").snapshotChanges().pipe(
    tap(data => console.log(data)),
    catchError(this.handleError)
    );  
  }

  addNewProduct(product: ProductsModel){
    return this.firestore.collection("products").add(product)
  }

  // getAllProducts(): Observable<IProducts[]>{
  //   return this.http.get<IProducts[]>(this.productsUrl).pipe(
  //     tap(data => console.log(JSON.stringify(data))),
  //     catchError(this.handleError)
  //   );
  // }

  getCartProducts(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.productsUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );    
  }

  
  //UPLOAD FUNCTION
  uploadSingleFile(event, n){
    const file = event.target.files[0];
    const task = this.fireStorage.upload(`productImages/${n}`, file);
    return task.snapshotChanges()

  }

  getSingleProduct( id: number): Observable<IProducts>{
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<IProducts>(url);
  }


  addToCart(cartProduct:IProducts): Observable<IProducts>{
    return this.http.post<IProducts>(this.productsUrl, cartProduct, this.httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )

  }


}
