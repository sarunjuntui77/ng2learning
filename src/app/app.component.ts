import { Component, OnInit } from '@angular/core';
import { ProductsService }  from './products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'app works!';
  	results = [];
  	constructor(private productService: ProductsService) { }
  	ngOnInit(): void {
  	  this.getProducts();
	  }

    delete(){
      
    }

    getProducts(){
      this.productService.getProducts()
      .then(data =>this.results=data);
    }
}
