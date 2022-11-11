import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils";
import { CreateJob } from "../protocols/types";
import * as jobRepository from "../repositories/jobRepository";
import dotenv from 'dotenv';
dotenv.config();

async function addJobService(job:CreateJob , userId:number) {

    if(job.price===""){
        job.price = "Valor a Negociar"
    }
      
    const verifyJob = await jobRepository.findJobByUser(job,userId);
    if (verifyJob) {
        
        throw conflictError("Serviço Já Cadastrado")
    }

    await jobRepository.addJob(job,userId)
    
}
async function findAllJobs(userId:number) {

    const jobs = await jobRepository.findAllJobs(userId);
    return jobs.map(job => {
        return {
            ...job,
        }
    })
    
}

async function updateJobService(userId:number, jobId:number, job:CreateJob){
    
    const search =  await jobRepository.findJobById(userId,jobId);
    if(!search)throw notFoundError("Job doesn't exist");
   
    await jobRepository.updateJob(job,jobId);
}

async function deleteJobService(userId:number, jobId:number){
   
    const verifyJob = await jobRepository.findJobById(userId,userId);
    console.log("Encontrado",verifyJob)
    // await jobRepository.deleteJob(jobId);
}

export const jobService = {
    addJobService,
    findAllJobs,
    updateJobService,
    deleteJobService,
}