// import {  } from "@prisma/client";
import { Request, Response } from "express";


export async function addService(req: Request, res: Response) {
    const {user} = res.locals;
    const service = req.body;
    console.log(service)
    // await provideService.addProviderService(user, service);
    res.sendStatus(201); // created
  }