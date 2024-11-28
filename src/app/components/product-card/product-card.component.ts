import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  addToCart(arg0: Product | null) {
    throw new Error('Method not implemented.');
  }
  @Input() product: (Product | null) = null;
  total: any;
}
