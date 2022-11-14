import { Router } from "express";

import { searchJobs, allJobs } from "../controllers/jobController";

const jobsFilterRouter = Router();

jobsFilterRouter.get("/jobs-all", allJobs)
jobsFilterRouter.get("/job-search/:description", searchJobs)

export default jobsFilterRouter