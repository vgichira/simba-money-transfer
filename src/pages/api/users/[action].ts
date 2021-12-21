import prisma from '@lib/prisma';
import { getSession } from "next-auth/react";

const userActions = async (req, res) => {
    let user: any
    const { action } = req.query;
    const { data } = req.body;
    let response: any

    const session = await getSession({ req });

    // eslint-disable-next-line prefer-const
    user = session.user

    switch (action) {
        case "fetch":
            response = await prisma.user.findUnique({
                where: data, 
                select: {
                    id: true, 
                    name: true, 
                    email: true, 
                    accountCurrency: true,
                }
            })
            break;
        case "all":
            response = await prisma.user.findMany({
                where: {
                    isActive: true, 
                    NOT: {
                        email: user.email
                    }
                },
                select: {
                    id: true, 
                    name: true, 
                    email: true, 
                }
            })
            break;
        case "balance":
            const debitTransactions = await prisma.transaction.findMany({
                where: {
                    senderID: user.id,
                }, 
                select: {
                    exchangeRate: true, 
                    sender: true, 
                    receiver: true, 
                    amount: true
                }
            })

            const debitTransactionsTotal = debitTransactions.reduce((acc, transaction) => {
                return transaction.sender.id !== transaction.receiver.id && acc + (transaction.exchangeRate * transaction.amount);
            }, 0);

            const creditTransactions = await prisma.transaction.findMany({
                where: {
                    receiverID: user.id,
                }, 
                select: {
                    exchangeRate: true, 
                    amount: true
                }
            })

            const creditTransactionsTotal = creditTransactions.reduce((acc, transaction) => {
                return acc + (transaction.exchangeRate * transaction.amount);
            }, 0);

            response = {
                account_balance: creditTransactionsTotal - debitTransactionsTotal
            }
            break;
        default:
            response = null;
            break;
    }

    res.status(200).json(response)
}

export default userActions;