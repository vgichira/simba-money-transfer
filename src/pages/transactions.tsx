import Layout from '@layouts/app-layout';
import TransactionData from '@features/transactions/transactions';
import withAuth from '@middleware/auth';
import { useTransactions } from '@data/use-transaction';

type Props = {
    data: any
}

const Transactions:React.FC<Props> = () => {
    const { loading, error, data } = useTransactions();

    if (error) {
        console.log(error);
        return null;
    }

    if (loading) return null;

    return (
        <Layout title="Transactions">
            <TransactionData transactions={data} />
        </Layout>
    )
}

export default withAuth(Transactions);