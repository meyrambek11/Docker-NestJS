import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "static"));
  app.enableCors({
    origin: "http://localhost:4200",
  });
  await app.listen(8080, () => console.log(`Server started on port = 8080`));
}
start();
