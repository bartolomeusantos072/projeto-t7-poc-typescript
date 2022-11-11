import {prisma} from "../config/database";
// import { User,Service, Address } from "@prisma/client";
import { CreateJob } from "../protocols/types";

export async function findJobByUser(job:CreateJob, id:number) {
     const result = prisma.service.findFirst({
        where:{
            AND:[
                {
                    descrition:{
                        equals: job.descrition,
                    },
                },
                {
                    userId:id
                },
            ],
           },
    })
    
    return result
  
}

export async function findJobById(userId:number,jobId:number){
   

    const result = prisma.service.findFirst({
        where:{
             id:jobId,
             userId:userId,
           },
    })
    return result
}

export async function deleteJob(jobId:number) {
    return prisma.service.delete({
        where:{
            id:jobId,
        }
    })
    
}

export async function addJob(job:CreateJob, id:number){
    return prisma.service.create({
        data:{
            ...job,
            userId:id,
        },
    })
}
export async function updateJob(job:CreateJob,jobId:number) {

    return prisma.service.update({
        where: {
            id: jobId
        },
        data: {
           ...job
        }
    })
}

export async function findAllJobs(userId:number) {
    return prisma.service.findMany({
      where:{
          userId:userId,
      }
    })    
  }