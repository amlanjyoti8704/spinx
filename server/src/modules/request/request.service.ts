import { Request, RequestStatus } from "../../models/request.model.js";
import { AppError } from "../../errors/AppError.js";

export class RequestService {

    async sendRequest(senderId:string,receiverId:string){

        if(senderId===receiverId){
            throw new AppError(
                "Cannot send request to yourself",
                400
            );
        }

        const existing=await Request.findOne({

            senderId,

            receiverId

        });

        if(existing){

            throw new AppError(

                "Request already exists",

                409

            );

        }

        return await Request.create({

            senderId,

            receiverId

        });

    }

    async acceptRequest(requestId: string, userId: string) {
        const request = await Request.findById(requestId);
        if (!request) {
            throw new AppError("Request not found", 404);
        }

        if (request.receiverId.toString() !== userId) {
            throw new AppError("Not authorized to accept this request", 403);
        }

        if (request.status !== RequestStatus.PENDING) {
            throw new AppError("Request is not pending", 400);
        }

        request.status = RequestStatus.ACCEPTED;
        await request.save();
        return request;
    }

    async rejectRequest(requestId: string, userId: string) {
        const request = await Request.findById(requestId);
        if (!request) {
            throw new AppError("Request not found", 404);
        }

        if (request.receiverId.toString() !== userId) {
            throw new AppError("Not authorized to reject this request", 403);
        }

        if (request.status !== RequestStatus.PENDING) {
            throw new AppError("Request is not pending", 400);
        }

        request.status = RequestStatus.REJECTED;
        await request.save();
        return request;
    }

    async getIncoming(userId: string) {
        return await Request.find({ receiverId: userId }).populate(
            "senderId",
            "name email avatar"
        );
    }

    async getOutgoing(userId: string) {
        return await Request.find({ senderId: userId }).populate(
            "receiverId",
            "name email avatar"
        );
    }

}

export const requestService = new RequestService();