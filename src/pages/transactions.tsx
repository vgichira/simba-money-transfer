import Layout from '@layouts/app-layout';
import TransactionData from '@features/transactions/transactions';
import withAuth from '@middleware/auth';

const Transactions = () => {
    return (
        <Layout title="Transactions">
            <TransactionData />
        </Layout>
    )
}

export default withAuth(Transactions);