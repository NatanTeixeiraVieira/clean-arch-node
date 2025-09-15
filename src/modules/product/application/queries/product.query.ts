export type ProductFindAll = {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export type FindAllProducts = {
  items: ProductFindAll[];
  meta: {
    totalItems: number;
  }
};

export interface ProductQuery {
  findAll(): Promise<FindAllProducts>
}