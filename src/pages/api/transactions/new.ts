import prisma from '@lib/prisma';

const newTransaction = async (req, res) => {
    const { method, body } = req;

    if (method !== 'POST') {
        res.status(405).json({message: "Method not allowed"})
        return
    }

    const {
        trans_id, 
        sender_currency, 
        receiver_currency, 
        exchange_rate, 
        amount, 
        is_successful, 
        sender_id, 
        receiver_id 
    } = body;

    const transaction = await prisma.transaction.create({
        data: {
            transactionID: trans_id,
            senderCurrencyID: sender_currency,
            receiverCurrencyID: receiver_currency,
            exchangeRate: exchange_rate,
            amount,
            isSuccessful: is_successful,
            senderID: sender_id,
            receiverID: receiver_id,
        }
    })

    res.status(200).json(transaction)
}

export default newTransaction;