import joi from "joi";
import { CreateAddress, CreateUserData, LoginUser } from "../utils/typeUtils";



export const addressSchema = joi.object<CreateAddress>({
  
  street: joi.string().required(),
  number: joi.string().required(),
  complement: joi.string().allow(""),
  suburb: joi.string().required(),
  zipCode: joi.string().length(8).required(),
  country: joi.string().required(),
  referencePoint: joi.string().required(),

})

export const createUserSchema = joi.object<CreateUserData>({
  email: joi.string().email().required().trim(),
  password: joi.string().required().trim(),
  name: joi.string().required().trim(),
  phone: joi.string().min(10).max(11).required().trim(),
  cellphone: joi.string().length(11).required().trim(),
  cpf: joi.string().length(11).required().trim(),
  photo: joi.string().uri().required().trim(),
})

export const userSchema = joi.object<LoginUser>({
  email:joi.string().email().required(),
  password:joi.string().min(10).required()
});

