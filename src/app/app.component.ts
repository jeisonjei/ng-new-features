import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/Product';
import { ProductCardComponent } from './components/product-card/product-card.component';

const REST_API_URL = 'http://dummyjson.com/products?limit=10';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ng-new-features';
  products: Product[] = [];
  async ngOnInit() {
    this.products = await fetch(REST_API_URL)
    .then((response)=>response.json())
      .then((data) => data.products.map((p: any) => {
        
        return {
          id: p.id,
          title: p.title,
          category: p.category,
          description: p.description,
          price: p.price,
          imgSrc: p.images[0]
      }
    }))
  }
}
