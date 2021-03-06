import useSWR from 'swr';
import fetcher from '@utils/api/fetcher';
import axios from 'axios';

const useCurrency = () => {
    const { data, error } = useSWR(`/api/currencies`, fetcher);

    const loading = !data && !error;

    return {
        loading, 
        data, 
        error
    }
}

export const getExchangeRate = async (from: string, to: string) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_EXCHANGE_RATE_BASE}${from}`, {
        headers: {
            'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com', 
            'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY
        }
    })

    const { rates } =  response.data;

    return rates[to]
}

export default useCurrency;