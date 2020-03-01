import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //we define a products variable of type Product[] and we initialize it with an empty array
  
  products: Product[] = []

  //inject ProductService
  constructor(private productService:ProductService) { }

  //Finally on the ngOnInit() life-cycle event of the component we subscribe to the Observable
  // returned from calling the getProducts() method and we assign the fetched products to the
  // products array.
 
  ngOnInit() {
    this.productService.getProducts().subscribe((products:Product[])=>{
      this.products = products;
      console.log(products);
    })

  }

}
