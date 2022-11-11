// import {  } from "@prisma/client";
import { Request, Response } from "express";
import  {jobService} from "../services/jobService";


export async function addMyJob(req: Request, res: Response) {
    const {id}= res.locals.user;
    const job = req.body;
    await jobService.addJobService(job ,id)

    res.sendStatus(201); // created
  }

export async function readJobs(req:Request, res:Response) {
  const { user } = res.locals;
  const jobs = await jobService.findAllJobs(user.id);
  res.send(jobs);
}

export async function updateMyJob(req:Request, res:Response) {
  
  const { id } = res.locals.user;
  const jobId = parseInt(req.params.id);
  const job = req.body;
  if (isNaN(jobId)) {
      res.sendStatus(422); 
  }
   await jobService.updateJobService(id, jobId, job);
 
  res.sendStatus(200);
}

export async function deleteMyJob(req: Request, res: Response) {

  const { id } = res.locals.user;
  const jobId = parseInt(req.params.id);
  
  if (isNaN(jobId)) {
      res.sendStatus(422); 
  }

  const result = await jobService.deleteJobService(id, jobId);
  res.status(200).send(result);
}