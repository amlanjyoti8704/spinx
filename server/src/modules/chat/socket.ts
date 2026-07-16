import { Server } from "socket.io";

let io: Server;

export function initSocket(server: any) {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("Connected:", socket.id);

    socket.on(
      "join-conversation",
      (conversationId: string) => {
        socket.join(conversationId);
      }
    );

    socket.on(
      "leave-conversation",
      (conversationId: string) => {
        socket.leave(conversationId);
      }
    );

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });

  return io;
}

export function getIO() {
  return io;
}