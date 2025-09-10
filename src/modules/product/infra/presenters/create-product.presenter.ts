import { Output } from "modules/product/application/usecases/create-product.usecase";

export class CreateProductPresenter {
  id: string;

  constructor(output: Output) {
    this.id = output.id;
  }
}