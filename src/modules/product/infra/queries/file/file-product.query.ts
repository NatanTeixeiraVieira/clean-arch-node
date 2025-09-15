import { promises as fs } from "fs";
import { join } from "path";
import { FindAllProducts, ProductQuery } from "../../../application/queries/product.query";
import { ProductProps } from "../../../domain/entities/product.entity";

const DATA_FILE = join(process.cwd(), "db/products.json");

export class FileProductQuery implements ProductQuery {
  async findAll(): Promise<FindAllProducts> {
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      const products: ProductProps[] = data ? JSON.parse(data) : [];

      return {
        items: products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
      })),
        meta: {
          totalItems: products.length
        }
      }
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") {
        return {
          items: [],
          meta: {
            totalItems: 0,
          }
        };
      }
      throw err;
    }
  }
}