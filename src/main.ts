import express from "express";
import { router } from "./shared/infra/express/router";
import { productRoutes } from "./modules/product/infra/express/routes/product.route";

const app = express();

app.use(express.json());

app.use("/api", productRoutes);

app.listen(3333, () => console.log("🚀 Server running on http://localhost:3333"));