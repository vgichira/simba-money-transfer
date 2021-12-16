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

export default useTransaction;