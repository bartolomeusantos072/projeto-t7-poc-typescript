import { Request, Response } from "express";
import { userService } from "../services/userService";
import { CreateAddress, CreateUserData, LoginUser } from "../utils/typeUtils";

export async function signUp(req: Request, res: Response) {
   
    const { email, password, name, phone, cellphone, cpf, photo,
    }:CreateUserData = req.body
    const user = {email, password, name, phone, cellphone, cpf, photo }
    const myAddress:CreateAddress = req.body.address
    const result =await userService.createUserData(user ,myAddress);
    console.log("Resultado", result)
    res.sendStatus(201);
}


export async function signIn(req: Request, res: Response) {
    const user: LoginUser = req.body;
    const token = await userService.login(user);
    res.send({ token });
}

