import { Router } from "express";

import authRouter from "./authRouter";
import jobsRouter from "./jobsRouter";

const router= Router();

router.use(authRouter);
router.use(jobsRouter);

export default router;
