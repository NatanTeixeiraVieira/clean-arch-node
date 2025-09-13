import { promises as fs } from "fs";
import { join } from "path";
import { Product } from "modules/product/domain/entities/product.entity";
import { ProductRepository } from "modules/product/domain/repositories/product.repository";

const DATA_FILE = join(process.cwd(), "db/products.json");

export class FileProductRepository implements ProductRepository {
  async findById(id: string): Promise<Product | null> {
     try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      const products = data ? JSON.parse(data) : [];
      const found = products.find((p: any) => p.id === id);
      if (!found) return null;
      // Ajuste conforme o construtor da sua entidade Product
      return new Product(found);
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") {
        return null;
      }
      throw err;
    }
  }
  
  async create(product: Product): Promise<void> {
    let products: any[] = [];
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8") ;
      products = data ? JSON.parse(data) : [] ;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") {
        throw err;
      }
    }


    products.push(product.toJSON());

    await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), "utf-8");
  }

  async update(product: Product): Promise<void> {
     let products: any[] = [];
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      products = data ? JSON.parse(data) : [];
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") {
        throw err;
      }
    }

    const index = products.findIndex((p: any) => p.id === product.id);
    if (index === -1) {
      throw new Error(`Product with id ${product.id} not found.`);
    }

    products[index] = product.toJSON();

    await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), "utf-8");
  }
}