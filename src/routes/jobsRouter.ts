import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { serviceSchema} from "../schemas/serviceSchema";
import { authMiddleware } from "../middlewares/authMiddleware";
import { addMyJob, readJobs, deleteMyJob} from "../controllers/jobController";

const jobsRouter = Router();
jobsRouter.use(authMiddleware);
jobsRouter.post( "/job-create",  validateSchemaMiddleware(serviceSchema), addMyJob );
jobsRouter.get("/job-read",readJobs)
jobsRouter.delete("/job-delete/id",validateSchemaMiddleware,deleteMyJob)


export default jobsRouter