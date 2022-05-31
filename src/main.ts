import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function start() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:4200",
  });
  await app.listen(8080, () => console.log(`Server started on port = 8080`));
}
start();
