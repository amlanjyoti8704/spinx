import { Response } from "express";

import { AuthRequest }
from "../auth/auth.middleware.js";

import { matchService }
from "./match.service.js";

export async function
getMatches(
req:AuthRequest,
res:Response
){

const matches=
await matchService
.getMatches(
req.userId!
);

return res.json({

success:true,

data:matches

});

}