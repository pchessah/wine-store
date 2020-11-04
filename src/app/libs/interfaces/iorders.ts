import { ProductsModel } from '../models/products-model';

export interface IOrders{
    orderNo: string;
    grandTotal: number;
    products: ProductsModel[];
    email: "string";
    phoneNumber: "number";
    firstName: "string";
    lastName: "string";
}