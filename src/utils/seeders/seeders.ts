import { PrismaClient } from '@prisma/client';
import currencies from './currencies';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Seed Currencies
    await prisma.currency.createMany({
        data: currencies, 
        skipDuplicates: true 
    })

    // Seed users
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
                accountCurrency: 1
            }
        ], 
        skipDuplicates: true 
    })

    // Seed Transactions
    await prisma.transaction.createMany({
        data: [
            {
                transactionID: `TRAN${+new Date()}`,
                senderCurrencyID: 2, 
                receiverCurrencyID: 1, 
                exchangeRate: 113.27, 
                amount: 2000, 
                isSuccessful: true,
                senderID: 1, 
                receiverID: 1
            }, 
            {
                transactionID: `TRAN${+new Date()}`,
                senderCurrencyID: 2, 
                receiverCurrencyID: 1, 
                exchangeRate: 113.27, 
                amount: 2000, 
                isSuccessful: true,
                senderID: 2, 
                receiverID: 2
            }
        ]
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