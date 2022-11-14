import { Router } from "express";

import authRouter from "./authRouter";
import jobsRouter from "./jobsRouter";
import jobsFilterRouter from './jobsFilterRouter'

const router= Router();

router.use(jobsFilterRouter)
router.use(authRouter);
router.use(jobsRouter);

export default router;
