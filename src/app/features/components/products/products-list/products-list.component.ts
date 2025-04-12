import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductDTO } from '../../../models/ProductDTOs';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products: ProductDTO[] = [];
  isLoading: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService
      .getProducts()
      .pipe(delay(200))
      .subscribe({
        next: (data: ProductDTO[]) => {
          this.products = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching products:', err);
          this.isLoading = false;
        },
      });
  }
}
