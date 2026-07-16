import { asyncHandler } from "../../middleware/asyncHandler.js";
import { AuthRequest } from "../auth/auth.middleware.js";
import { successResponse } from "../../utils/apiResponse.js";
import { requestService } from "./request.service.js";


export const sendRequest=asyncHandler( async(req:AuthRequest,res)=>{
    const receiverId=req.params.receiverId as string;
    const request= await requestService.sendRequest(req.userId!,receiverId!);
    return successResponse(res,"Request Sent",request,201);
});

export const getIncoming = asyncHandler(async (req: AuthRequest, res) => {
  const requests = await requestService.getIncoming(req.userId!);
  return successResponse(res, "Incoming requests retrieved successfully", requests, 200);
});

export const getOutgoing = asyncHandler(async (req: AuthRequest, res) => {
  const requests = await requestService.getOutgoing(req.userId!);
  return successResponse(res, "Outgoing requests retrieved successfully", requests, 200);
});

export const acceptRequest = asyncHandler(async (req: AuthRequest, res) => {
  const requestId = req.params.requestId as string;
  const request = await requestService.acceptRequest(requestId, req.userId!);
  return successResponse(res, "Request accepted successfully", request, 200);
});

export const rejectRequest = asyncHandler(async (req: AuthRequest, res) => {
  const requestId = req.params.requestId as string;
  const request = await requestService.rejectRequest(requestId, req.userId!);
  return successResponse(res, "Request rejected successfully", request, 200);
});