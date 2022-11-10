import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { userSchema, createUserSchema, addressSchema } from "../schemas/userSchema";
import {signIn,signUp} from "../controllers/authController";

const authRouter = Router();

authRouter.post(
    "/sign-up",
    validateSchemaMiddleware(createUserSchema),
    validateSchemaMiddleware(addressSchema),
    signUp
);
authRouter.post(
    "/sign-in",
    validateSchemaMiddleware(userSchema),
    signIn
);

export default authRouter