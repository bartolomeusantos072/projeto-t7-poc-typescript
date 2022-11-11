import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { serviceSchema, upServiceSchema} from "../schemas/serviceSchema";
import { authMiddleware } from "../middlewares/authMiddleware";
import { addMyJob, readJobs, updateMyJob, deleteMyJob} from "../controllers/jobController";

const jobsRouter = Router();
jobsRouter.use(authMiddleware);
jobsRouter.post( "/job-create",  validateSchemaMiddleware(serviceSchema), addMyJob );
jobsRouter.get("/job-read",readJobs)
jobsRouter.put("/job-update/:id",validateSchemaMiddleware(upServiceSchema),updateMyJob)
jobsRouter.delete("/job-delete/:id",deleteMyJob)


export default jobsRouter