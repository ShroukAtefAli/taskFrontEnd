import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  allCategories() {
    return this.http.get(`${environment.api}products/categories`);
  }

  getCategoryProducts(category) {
    return this.http.get(`${environment.api}products/category/${category}`);
  }

  addProductsToCart(body) {
    return this.http.post(`${environment.api}carts`,body);
  }

}
