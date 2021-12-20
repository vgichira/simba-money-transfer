import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/api/fetcher';

export const getUser = async (data: any) => {
    const requestBody = {
        data: data,
    }

    const response = await axios.post(`/api/users/fetch`, requestBody);

    return response.data;
}

export const useUser = () => {
    const { data, error } = useSWR(`/api/users/all`, fetcher);

    const loading = !data && !error;

    return {
        loading, 
        data, 
        error
    }
}

export const registerUser = async (data: any): Promise<any> => {
    try {
        const response = await axios.post('/api/auth/signup', data);

        return response.data
    } catch (error) {
        return error.response.data;
    }
}