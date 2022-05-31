import { Repository } from "typeorm";
import { Product } from "./product.entity";
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    getAll(): Promise<Product[]>;
}
