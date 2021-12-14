import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.currency.createMany({
        data: [
            { 
                currencyName:"Kenya Shilling", 
                shortHand: "KES" 
            },
            { 
                currencyName:"US Dollar", 
                shortHand: "USD" 
            },
            { 
                currencyName:"Euro", 
                shortHand: "EUR" 
            },
            { 
                currencyName:"Nigerian Naira", 
                shortHand: "NGN" 
            },
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