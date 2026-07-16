import { Router }
from "express";

import { protect }
from "../auth/auth.middleware.js";

import {
getMatches
}
from "./match.controller.js";

const router=Router();

router.get(
"/",

protect,

getMatches
);

export default router;