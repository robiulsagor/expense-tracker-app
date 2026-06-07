// auth.route.ts

import { Router } from "express";
import { register } from "./auth.controller";

const router: Router = Router();

router.post("/register", register);

export default router;