// import { PrismaClient } from '@prisma/client'
import  {prisma}  from '../src/config/database';
import userFactory from './factories/userFactory';
import serviceFactory from './factories/serviceFactory';


async function main() {
  for(let i=0;i<10;i++){
    const createUser = await userFactory.signUp()
    for(let j=0;j<4;j++){
      await serviceFactory.createServiceSupplier(createUser.id);    
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })