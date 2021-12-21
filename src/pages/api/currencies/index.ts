import prisma from '@lib/prisma';

const getCurrencies = async (req, res) => {
    const currencies = await prisma.currency.findMany({
        where: {
            isActive: true,
            deletedAt: null,
        }, 
        select: {
            id: true, 
            currencyName: true, 
            shortHand: true, 
        }
    })

    res.json(currencies);
}

export default getCurrencies;