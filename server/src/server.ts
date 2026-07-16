import app from "./app.js";
import http from "http";
import { env } from "./config/env.js";
import { connectDB } from "./config/database.js";
import { initSocket } from "./modules/chat/socket.js"

async function bootstrap() {
    await connectDB();

    const server=http.createServer(app);
    
    initSocket(server);

    server.listen(env.PORT, () => {
        console.log(`🚀 Server running on http://localhost:${env.PORT}`);
    });
}

bootstrap();