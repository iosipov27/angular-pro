import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class StockMessageResolver implements Resolve<any>{

  constructor(private productServise: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productServise.getProduct(route.params.id);
  }

}
