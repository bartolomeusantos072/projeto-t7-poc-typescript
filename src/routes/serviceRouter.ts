import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { serviceSchema} from "../schemas/serviceSchema";
import { authMiddleware } from "../middlewares/authMiddleware";
import {addService} from "../controllers/addService";

const serviceRouter = Router();
serviceRouter.use(authMiddleware);
serviceRouter.post( "/add-service",  validateSchemaMiddleware(serviceSchema), addService );


export default serviceRouter