import { Controller, Get } from "@nestjs/common";
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from "@nestjs/microservices";
import { UserDto } from "./dto/user.dto";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @EventPattern("hello")
  async hello(data:  UserDto): Promise<void> {
    console.log(data);
  }
}
