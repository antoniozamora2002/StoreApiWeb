import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ProductsListComponent } from './features/components/products/products-list/products-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsListComponent },
];
