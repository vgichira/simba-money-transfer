import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/api/fetcher';

interface transType {
    trans_id: string;
    sender_currency: number;
    receiver_currency: number;
    exchange_rate: number;
    amount: number;
    is_successful: boolean;
    sender_id: number;
    receiver_id: number;
}

export const newTransaction = async (transaction: transType) => {
    const response = await axios.post(`/api/transactions/new`, transaction);

    return response.data;
}

export const useTransactions = () => {
    const { data, error } = useSWR(`/api/transactions`, fetcher);

    const loading = !data && !error;

    return {
        loading, 
        data, 
        error
    }
}