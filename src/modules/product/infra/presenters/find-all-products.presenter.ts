import { Output } from "../../application/usecases/find-all-products.usecase";

class ProductFindAllPresenter {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export class FindAllProductsPresenter {
  items: ProductFindAllPresenter[];
  meta: {
    totalItems: number;
  }

  constructor(output: Output) {
    Object.assign(this, output);
  }
}