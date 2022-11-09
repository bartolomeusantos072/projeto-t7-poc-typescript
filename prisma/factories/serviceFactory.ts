import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";


async function createServiceSupplier(userId: number ){
    
    const service = await prisma.service.create({
        data: {
            descrition :faker.name.jobTitle(),
            price      :faker.commerce.price(25,100,0,"R$"),
            userId,
        }
    })

    return service;
}

const serviceFactory={
    createServiceSupplier,
}

export default serviceFactory;