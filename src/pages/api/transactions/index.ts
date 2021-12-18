import prisma from '@lib/prisma';

const fetchTransactions = async (req, res) => {
    const transactions = await prisma.transaction.findMany({
        where: {
            isSuccessful: true
        },
        select: {
            id: true,
            transactionID: true,
            amount: true,
            sender: true, 
            receiver: true,
            receiverCurrency: true, 
            createdAt: true,
            updatedAt: true
        }
    })

    res.status(200).json(transactions)
}

export default fetchTransactions;