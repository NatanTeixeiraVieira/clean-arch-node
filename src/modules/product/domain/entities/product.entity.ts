import { Entity } from "shared/domain/entities/entity";

export type ProductProps = {
  id: string;
  name: string;
  price: number;
  stock: number;
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
      stock: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    Product.validate(props);

    return new Product(props)
  }

  increaseStock(stock: number): void {
    if(stock <= 0) {
      throw new Error('Stock must be grater than 0');
    }

    this.props.stock += stock;
  }

  decreaseStock(stock: number): void {
    if(stock <= 0) {
      throw new Error('Stock must be grater than 0');
    }

    if(this.props.stock - stock < 0) {
      throw new Error('Insufficient stock');
    }

    this.props.stock -= stock;
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