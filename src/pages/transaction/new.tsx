import Layout from '@layouts/app-layout';
import NewTransactionForm from '@features/transactions/new-transaction-form';

const NewTransaction = () => {
    return (
        <Layout title="Dashboard">
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="mb-1 w-full">
                    <div className="mb-4">
                        <NewTransactionForm />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NewTransaction;