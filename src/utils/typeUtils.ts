import { User,Service, Address } from "@prisma/client";


export type CreateUserData = Omit<User,"id">
export type LoginUser = {
    email: string,
    password:string,
}
export type CreateAddress = Omit<Address,"id" | "userId">
export type CreateService = Omit<Service,"id">
