import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function start() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        "amqps://yznzbkwx:cH1U1q0DjQndYcPzZ7cvO7Cj5H8wuzoK@cougar.rmq.cloudamqp.com/yznzbkwx",
      ],
      queue: "main_queue",
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
}
start();
