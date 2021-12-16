import axios from 'axios';

export const getUser = async (data: any) => {
    const requestBody = {
        data: data,
    }

    const response = await axios.post(`/api/user/fetch`, requestBody);

    return response.data;
}