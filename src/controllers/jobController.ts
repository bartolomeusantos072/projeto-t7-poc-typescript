// import {  } from "@prisma/client";
import { Request, Response } from "express";
import { number } from "joi";
import  {jobService} from "../services/jobService";


export async function addMyJob(req: Request, res: Response) {
    const {user}= res.locals;
    const job = req.body;
    await jobService.addJobService(job ,user.id)

    res.sendStatus(201); // created
  }
export async function readJobs(req:Request, res:Response) {
  const { user } = res.locals;
  const jobs = await jobService.findAllJobs(user.id);
  res.send(jobs);
}
export async function deleteMyJob(req: Request, res: Response) {

  const { user } = res.locals;
  const jobId = parseInt(req.params.id);
  if (isNaN(jobId)) {
      res.sendStatus(422); 
  }

  await jobService.deleteJobService(user.id, jobId);
  res.sendStatus(200);
}