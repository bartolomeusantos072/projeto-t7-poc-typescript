import { type } from "os";
import {prisma} from "../config/database";

import { CreateJob } from "../protocols/types";

export async function findJobByUser(job:CreateJob, id:number) {
     const result =await prisma.service.findFirst({
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
   

    const result = await prisma.service.findFirst({
        where:{
             id:jobId,
             userId:userId,
           },
    })
    return result
}

export async function deleteJob(jobId:number) {
    const result = await prisma.service.delete({
        where:{
            id:jobId,
        }
    })
    return result
}

export async function addJob(job:CreateJob, id:number){
    const result = await prisma.service.create({
        data:{
            ...job,
            userId:id,
        },
    })
    return result
}

export async function updateJob(job:CreateJob,jobId:number) {

    const result = await prisma.service.update({
        where: {
            id: jobId
        },
        data: {
           ...job
        }
    })

    return result
}

export async function findAllJobsByUser(userId:number) {

    const result = await prisma.service.findMany({
      where:{
          userId:userId,
      }
    })
    
    return result    
}


export async function allJobs(){
   const result = await prisma.service.findMany();
   return result;
}