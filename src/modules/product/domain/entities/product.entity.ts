import { Entity } from "shared/domain/entities/entity";

export type ProductProps = {
  id: string;
  name: string;
  price: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

type CreateProductProps = {
  name: string;
  price: number;
  description?: string;
}

export class Product extends Entity<ProductProps> {
  static create(createProps: CreateProductProps): Product {
    const props: ProductProps = {
      id: crypto.randomUUID().toString(),
      name: createProps.name,
      price: createProps.price,
      description: createProps.description,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    Product.validate(props);

    return new Product(props)
  }

  private static validate(props: ProductProps): void {
    if(props.price > 5000) {
      throw new Error('Price cannot be greater than 5000');
    }

    if(props.price <= 0) {
      throw new Error('Price must be greater than 0');
    }

    if(props.name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }

  get id(): string {
    return this.props.id;
  }
}