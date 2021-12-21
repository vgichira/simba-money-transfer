import { PrismaClient } from '@prisma/client';
import currencies from './currencies';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    await prisma.currency.createMany({
        data: currencies, 
        skipDuplicates: true 
    })

    await prisma.user.createMany({
        data: [
            {
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                password: await bcrypt.hash('Test1234', 10),
                isActive: true, 
                accountCurrency: 1
            },
            {
                name: 'Jane Doe',
                email: 'jane.doe@gmail.com',
                password: await bcrypt.hash('Test1234', 10),
                isActive: true, 
                accountCurrency: 2
            }
        ], 
        skipDuplicates: true 
    })
}
  
main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});