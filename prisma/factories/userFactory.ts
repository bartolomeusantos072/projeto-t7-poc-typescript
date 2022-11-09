import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt'
import { prisma } from "../../src/config/database";


interface Login { email: string, password: string };


function signIn() {
    const passwordLength = 10;
    return {
        email: faker.internet.email(),
        password: faker.internet.password(passwordLength)
    }

}

async function signUp() {

    const user = await prisma.user.create({
        data: {
            name     : faker.animal.bird(),
            email    : faker.internet.email(),
            password :
             bcrypt.hashSync(
                faker.internet.password(), 
                12),
            phone: faker.phone.number('32353#####'), 
            cellphone: faker.phone.number('32#########'),
            cpf       : faker.phone.number('###########'),
            photo     : faker.image.animals(),
            address: {
                create:{
                    street: faker.address.street(),
                    number: faker.address.buildingNumber(),
                    complement: faker.commerce.productName(),
                    suburb: faker.address.city(),
                    zipCode: faker.address.zipCode(),
                    country: faker.address.country(),
                    referencePoint: faker.commerce.department(),    
                }
            },
        }
    });

    return { ...user };
}

function createAdress(){

}

const userFactory = {
    signIn,
    signUp
}

export default userFactory;
