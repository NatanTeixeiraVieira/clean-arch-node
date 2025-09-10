import { promises as fs } from "fs";
import { join } from "path";
import { Product } from "modules/product/domain/entities/product.entity";
import { ProductRepository } from "modules/product/domain/repositories/product.repository";

const DATA_FILE = join(process.cwd(), "db/products.json");

export class FileProductRepository implements ProductRepository {
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
}