import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[];
  isModalOpened = false;
  productToUpdate:any = {};
  indexToUpdate:any;
  @Input() openModalEvent: Observable<any>;


  constructor(private productService: ProductService) { }



  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.allProducts().subscribe((data:any[]) =>{
      this.products = data;
    })
  }

  onAdd(){
    this.productToUpdate = {};
    this.indexToUpdate='';
    this.isModalOpened = true;
  }

  onDelete(index){
    this.productService.deleteProduct(index).subscribe(res =>{
      this.products = this.products.filter(prod => prod.id != index);
  },error =>{
    alert("Something went wrong");
  })
  }

  onUpdate(index){
    this.indexToUpdate=index;
    this.productToUpdate = this.products[index];
    this.isModalOpened = true;
  }

  saveProduct(product){
    if(this.indexToUpdate){
      this.products[this.indexToUpdate]=product;
    } else {
      this.addProduct(product);

    }
    this.closingModal();
  }
  addProduct(product){
    this.productService.addProduct(product).subscribe(res =>{
      this.getProducts();
    })
  }

  closingModal() {
    this.isModalOpened = false;
  }
}
