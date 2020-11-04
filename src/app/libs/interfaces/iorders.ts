import { ProductsModel } from '../models/products-model';

export interface IOrders{
    orderNo: string;
    products: ProductsModel[];
    email: "string";
    phoneNumber: "number";
    firstName: "string";
    lastName: "string";
}