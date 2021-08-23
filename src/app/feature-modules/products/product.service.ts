import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url : string = 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient) { }

  allProducts() {
    return this.http.get(`${environment.api}/products`);
  }

  addProduct(product){

    return this.http.post('https://fakestoreapi.com/products',product)
  }

  updateProduct(product,id){
    return this.http.put('https://fakestoreapi.com/products/'+id,product)
  }

  deleteProduct(id){
    return this.http.delete('https://fakestoreapi.com/products/'+id)
  }

}
