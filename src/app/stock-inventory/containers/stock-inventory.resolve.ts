import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<any>{

  constructor(private productServise: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productServise.getProducts(route.params.name);
  }

}
