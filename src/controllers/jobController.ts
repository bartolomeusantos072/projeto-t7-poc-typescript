
import { Request, Response } from "express";
import { CreateJob } from "../protocols/types";
import { jobService } from "../services/jobService";
import { Service } from "@prisma/client";






export async function addMyJob(req: Request, res: Response) {
  const id = Number(res.locals.user.id);
  const job:CreateJob = req.body;
  await jobService.addJobService(job, id)

  res.sendStatus(201); // created
}

export async function readJobs(req: Request, res: Response) {
  const id = Number(res.locals.user.id);
  const jobs: Service[] = await jobService.findAllJobsByUser(id);
  res.send(jobs);
}

export async function updateMyJob(req: Request, res: Response) {

  const id = Number(res.locals.user.id);
  const jobId = Number(req.params.id);
  const job:CreateJob= req.body;
 
  if (isNaN(jobId)) {
    res.sendStatus(422);
  }
   await jobService.updateJobService(id, jobId, job);

  res.sendStatus(200);
}

export async function deleteMyJob(req: Request, res: Response) {

  const id = Number(res.locals.user.id);
  const jobId = parseInt(req.params.id);

  if (isNaN(jobId)) {
    res.sendStatus(422);
  }

  const result = await jobService.deleteJobService(id, jobId);
  // res.status(200).send(result);
  res.status(200).send(result)
}

export async function allJobs(req:Request, res: Response){
   
 const result:Service[] = await jobService.allJobs()
 res.status(200).send(result)
  
}

export async function searchJobs(req:Request, res: Response){
  const search:string =req.params.description
  const result:Service[]|string =  await jobService.searchJobService(search) ; 
  res.status(200).send(result)
 
}