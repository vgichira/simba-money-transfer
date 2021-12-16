import useSWR from 'swr';
import fetcher from '@utils/api/fetcher';

const useCurrency = () => {
    const { data, error } = useSWR(`/api/currencies`, fetcher);

    const loading = !data && !error;

    return {
        loading, 
        data, 
        error
    }
}

export default useCurrency;