import { Injectable } from '@nestjs/common';
// import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly products: any[] = [
    {
      id: 1,
      name: 'Production',
      description: 'Production',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  // createProduct(data: CreateUserEvent) {
  //   console.log('handlerUserCreated - ANALYTICS', data);
  //   this.products.push({
  //     id: 22,
  //     name: 'Product x',
  //     description: 'product x',
  //   },);
  // }
  //
  // getProducts() {
  //   console.log('products');
  //   return this.products;
  // }
}
