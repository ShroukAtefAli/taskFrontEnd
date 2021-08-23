import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  categorries : string [];
  products: any[];
  activeTab:string;


  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.allCategories().subscribe((res:string[]) =>{
      this.categorries = res;
      this.getProducts(res[0]);
      this.activeTab = res[0];
    })
  }

  getProducts(category){
    this.categoryService.getCategoryProducts(category).subscribe((res:any[]) => {
      this.products = res;
    })
  }

  changeCategory(cat){
    this.activeTab =cat;
    this.getProducts(cat);
  }

  addToCart(product){
    let body = {
      userId:5,
      date:Date.now(),
      products:[{productId:product.id,quantity:1}]
    }
    this.categoryService.addProductsToCart(body).subscribe(res =>{
      alert('product added successfully');
    },error =>{
      alert('something went wrong');
    })

  }

}
