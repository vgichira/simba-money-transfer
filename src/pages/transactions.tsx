import { GetStaticProps } from 'next';
import safeJsonStringify from 'safe-json-stringify';
import Layout from '@layouts/app-layout';
import TransactionData from '@features/transactions/transactions';
import withAuth from '@middleware/auth';
import { getTransactions } from '@data/use-transaction';

type Props = {
    data: any
}

const Transactions:React.FC<Props> = ({ data }) => {
    console.log(data);
    return (
        <Layout title="Transactions">
            <TransactionData transactions={data} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const transactions = await getTransactions();
    const stringifiedData = safeJsonStringify(transactions);
    const data = JSON.parse(stringifiedData);

    return {
        props: {
            data
        },
        revalidate: 30
    }
  }

export default withAuth(Transactions);