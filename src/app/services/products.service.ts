import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  data: any;

  constructor() {

    this.data = {
      inbox: [
        {
          "id": 4,
          "name": "Extra",
          "quantity": 3
        },
        {
          "id": 42,
          "name": "Extra Gun",
          "quantity": 454
        },
        {
          "id": 34,
          "name": "Extra Puma",
          "quantity": 90
        },
        {
          "id": 44,
          "name": "Extra Super",
          "quantity": 425
        }
      ],
      trash: [
        {
          "id": 114,
          "name": "Extr22a",
          "quantity": 3
        },
        {
          "id": 3242,
          "name": "Extra G3223un",
          "quantity": 454
        },
      ]
    }
  }

  getProduct(id) {
    return of(this.data['trash'][0]);
  }


  getProducts(name: string) {
    return of(this.data[name]);
  }

}
