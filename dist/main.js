"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "static"));
    app.enableCors({
        origin: "http://localhost:4200",
    });
    await app.listen(8080, () => console.log(`Server started on port = 8080`));
}
start();
//# sourceMappingURL=main.js.map