"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function start() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
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
//# sourceMappingURL=listener.js.map