import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProducts } from '../interfaces/iproducts';
import { tap, catchError } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProducts[];
  productsUrl="api/products";

  constructor( private http: HttpClient ) { }

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




  getAllProducts(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.productsUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


}
