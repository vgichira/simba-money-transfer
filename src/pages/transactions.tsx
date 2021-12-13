import Layout from '@layouts/app-layout';
import TransactionData from '@features/transactions/transactions';

const Transactions = () => {
    return (
        <Layout title="Transactions">
            <TransactionData />
        </Layout>
    )
}

export default Transactions;