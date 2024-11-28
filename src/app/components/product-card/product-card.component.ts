import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
export class ProductCardComponent implements OnInit{
  @Input() product: (Product | null) = null;

  formGroup: FormGroup = new FormGroup({
    quantity: new FormControl(1)
  });
  
  total: number = 0;



  ngOnInit(): void {
    this.total = this.product?.price ?? 0;
    this.formGroup.controls['quantity'].valueChanges.subscribe((value) => {
      this.total = (this.product?.price ?? 0) * value;
    });
  }
  addToCart(arg0: Product | null) {

  }
}
