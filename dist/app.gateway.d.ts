import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WsResponse } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleMessage(client: Socket, text: string): WsResponse<String>;
}
