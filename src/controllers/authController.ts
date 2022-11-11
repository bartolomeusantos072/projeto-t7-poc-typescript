import { Request, Response } from "express";
import { userService } from "../services/userService";
import { CreateAddress, CreateUserData, LoginUser } from "../protocols/types";

export async function signUp(req: Request, res: Response) {
   
    const { email, password, name, phone, cellphone, cpf, photo,
    }:CreateUserData = req.body
    const user = {email, password, name, phone, cellphone, cpf, photo }
    const myAddress:CreateAddress = req.body.address
    await userService.createUserData(user ,myAddress);
    
    res.sendStatus(201);
}


export async function signIn(req: Request, res: Response) {
    const user: LoginUser = req.body;
    const token = await userService.login(user);
    res.send({ token });
}

