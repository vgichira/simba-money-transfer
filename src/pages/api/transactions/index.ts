import prisma from '@lib/prisma';
import { getSession } from 'next-auth/react';

const fetchTransactions = async (req: any, res: any) => {
    let user: any
    const session = await getSession({ req });

    // eslint-disable-next-line prefer-const
    user = session.user

    const transactions = await prisma.transaction.findMany({
        where: {
            isSuccessful: true, 
            OR: [
                {
                    senderID: user.id, 
                }, 
                {
                    receiverID: user.id, 
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
        }, 
        orderBy: {
            id: "desc"
        }
    })

    res.status(200).json(transactions)
}

export default fetchTransactions;