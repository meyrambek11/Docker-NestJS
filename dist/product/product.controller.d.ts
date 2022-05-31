import { UserDto } from "./dto/user.dto";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(): Promise<Product[]>;
    hello(data: UserDto): Promise<void>;
}
