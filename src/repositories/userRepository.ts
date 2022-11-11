import {prisma} from "../config/database";
import { CreateAddress, CreateUserData } from "../protocols/types";


export async function findUserEmail(email: string) {
  return prisma.user.findUnique({
    where: {
       email,
    },
  });
}

export async function findById(id: number) {
  return prisma.user.findUnique({
    where: { id }
  });
}

export async function insert(user:CreateUserData, addressUser:CreateAddress) {
  const result = prisma.user.create({
    data: {
       ...user,
      address:{
        create:{

          ...addressUser,
        }
      },
    }
  });
  return result;
}
