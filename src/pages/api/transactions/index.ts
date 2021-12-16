import prisma from '@lib/prisma';

const fetchTransactions = async (req, res) => {
    const transactions = await prisma.transaction.findMany({
        where: {
            isSuccessful: true
        }
    })

    res.json(transactions)
}

export default fetchTransactions;