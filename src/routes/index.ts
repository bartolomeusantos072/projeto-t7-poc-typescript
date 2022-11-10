import { Router } from "express";

import authRouter from "./authRouter";
import serviceRouter from "./serviceRouter";

const router= Router();

router.use(authRouter);
router.use(serviceRouter);

export default router;
