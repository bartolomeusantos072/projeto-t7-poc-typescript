import { Request, Response } from "express";
import { userService } from "../services/userService";
import { LoginUser } from "../utils/typeUtils";

export async function signUp(req:Request, res:Response) {
    const user = req.body;
    await userService.createUser(user);
    res.sendStatus(201);
}


export async function signIn(req:Request, res:Response) {
    const user : LoginUser = req.body;
    const token = await userService.login(user);
    res.send({token});
}

