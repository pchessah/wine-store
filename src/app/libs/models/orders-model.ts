import { ProductsModel } from './products-model';

export class OrdersModel {
    orderNo: string;
    products: ProductsModel[];
    email: string;
    phoneNumber: number;
    firstName: string;
    lastName: string;
}
