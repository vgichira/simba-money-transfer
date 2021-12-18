import prisma from '@lib/prisma';
import axios from 'axios';

const useTransaction = () => {
    const newTransaction = async (transaction) => {
        const response = await axios.post(`/api/transactions/new`, transaction);

        return response.data;
    }

    return {
        newTransaction
    }
}

export const getTransactions = async () => {
    const transactions = await prisma.transaction.findMany({
        where: {
            isSuccessful: true,
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
    });

    return transactions;
}

export default useTransaction;