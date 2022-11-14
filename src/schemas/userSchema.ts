import joi from "joi";
import { CreateAddress, LoginUser } from "../protocols/types";

export const addressSchema = joi.object<CreateAddress>({
  street: joi.string().required(),
  number: joi.string().required(),
  complement: joi.string().allow("").required(),
  suburb: joi.string().required(),
  zipCode: joi.string().length(8).required(),
  country: joi.string().required(),
  referencePoint: joi.string().required(),

})

export const createUserSchema = joi.object({
  email: joi.string().email().required().trim(),
  password: joi.string().required().trim(),
  name: joi.string().required().trim(),
  phone: joi.string().min(10).max(11).required().trim(),
  cellphone: joi.string().length(11).required().trim(),
  cpf: joi.string().length(11).required().trim(),
  photo: joi.string().uri().required().trim(),
  address: addressSchema 
})

export const userSchema = joi.object<LoginUser>({
  email:joi.string().email().required(),
  password:joi.string().required()
});

export const searchSchema = joi.object({
  search:joi.string().required()
})