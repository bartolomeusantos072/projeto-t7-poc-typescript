import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils";
import { CreateJob } from "../protocols/types";
import * as jobRepository from "../repositories/jobRepository";
import { prisma } from "../config/database";
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
async function findAllJobsByUser(userId:number) {

    const jobs = await jobRepository.findAllJobsByUser(userId);
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
    
    const data = await jobRepository.findJobById(userId,jobId);
    if(!data)throw notFoundError("Job doesn't exist");
    
     await jobRepository.deleteJob(jobId);
    return data
}

async function searchJobService(search:string) {
    
    const results = await jobRepository.allJobs()

    const jobs=results.filter(
            function (result){
                if(result.descrition.toLowerCase().indexOf(search.toLowerCase())>-1){
                     
                       return result.descrition
                    
                }
            }
            
    // result.descrition => result.descriton.toLowerCase().indexOf(search.toLowerCase())>-1
            )
        
    
    return jobs

  
    
}

async function allJobs(){
    const result = await jobRepository.allJobs()
    return result
   }

export const jobService = {
    addJobService,
    findAllJobsByUser,
    updateJobService,
    deleteJobService,
    allJobs,
    searchJobService,
    
    // allJobsService
}