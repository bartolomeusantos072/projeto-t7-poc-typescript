import { User,Service, Address } from "@prisma/client";


export type CreateUserData = Omit<User,"id">
export type CreateAddress = Omit<Address,"id">
export type CreateService = Omit<Service,"id">
