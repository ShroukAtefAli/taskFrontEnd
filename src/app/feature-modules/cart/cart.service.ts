import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ProductService } from '../products/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http:HttpClient,private productService:ProductService) { }

  getUserCatrtProducts(userId) {
    return this.http.get(`${environment.api}carts/user/${userId}`);
  }

  mapProducts(res){
    let products:any[] = res[0][0].products;
    products.forEach(elmnt => {
      res[1].find(prod =>{
        if(prod.id == elmnt.productId){
          Object.assign(elmnt, prod);
          elmnt.linePrice = elmnt.price * elmnt.quantity
        }
      })
    });
    return products
  }

  getProducts(userId){
    return forkJoin(this.getUserCatrtProducts(userId), this.productService.allProducts()).pipe(map((res: any) => {
      return this.mapProducts(res);
    }));;
  }

}
