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

export async function findJobById(jobId:number,userId:number){
    const result = prisma.service.findFirst({
        where:{
            AND:[
                {
                  id:jobId
                },
                {
                    userId:userId
                },
            ],
           },
    })
    
    return result
}
export async function findAllJobs(userId) {
  return prisma.service.findMany({
    where:{
        userId:userId,
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