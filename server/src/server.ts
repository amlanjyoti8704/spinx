import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/database.js";

async function bootstrap() {
    await connectDB();

    app.listen(env.PORT, () => {
        console.log(`🚀 Server running on http://localhost:${env.PORT}`);
    });
}

bootstrap();