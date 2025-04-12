export interface CategoryDTO {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface ProductDTO {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryDTO;
  images: string[];
  creationAt: string;
  updatedAt: string;
}
