import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  products:any[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.allCartProducts();
  }

  allCartProducts(){
    this.cartService.getProducts(1).subscribe(res =>{
      this.products = res;
    })
  }

}
