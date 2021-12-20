import prisma from '@lib/prisma';
import { getSession } from 'next-auth/react';

const fetchTransactions = async (req: any, res: any) => {
    const { user } = await getSession({ req });

    const transactions = await prisma.transaction.findMany({
        where: {
            isSuccessful: true, 
            OR: [
                {
                    senderCurrencyID: user.id,
                }, 
                {
                    receiverCurrencyID: user.id,
                }
            ]
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