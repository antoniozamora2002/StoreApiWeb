import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ProductDTO } from '../models/ProductDTOs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  PRODUCTS_API = environment.apiUrl + '/api/v1/products';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.PRODUCTS_API);
  }
}
