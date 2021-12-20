import Link from 'next/link';
import PageHeader from '@layouts/header/page-header';
import { formatDate } from '@utils/formatter';
import { useSession } from 'next-auth/react';

type Props = {
    transactions: any
}

const Transactions:React.FC<Props> = ({ transactions }) => {
    const { data: session } = useSession();

    const { user } = session

    return (
        <>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="mb-1 w-full">
                    <div className="mb-4">
                        <PageHeader title="Transactions" />
                    </div>
                    <div className="sm:flex">
                        <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
                            <form className="lg:pr-3" action="#" method="GET">
                                <label htmlFor="users-search" className="sr-only">Search</label>
                                <div className="mt-1 relative lg:w-64 xl:w-96">
                                    <input type="text" name="email" id="users-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search Transaction" />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                            <Link href="/transaction/new">
                                <a data-modal-toggle="add-user-modal" 
                                className="w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 
                                focus:ring-cyan-200 font-medium inline-flex items-center justify-center 
                                rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                                <svg className="-ml-1 mr-1 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" 
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" 
                                    clipRule="evenodd"></path>
                                </svg>
                                New Transaction
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden">
                            <table className="table-fixed min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Transaction ID
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            From
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            To
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Sender Currency
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Receiver Currency
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Exchange Rate
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Amount
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Created At
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {transactions.map(({ 
                                        id, 
                                        transactionID, 
                                        exchangeRate, 
                                        amount, 
                                        sender, 
                                        receiver, 
                                        senderCurrency, 
                                        receiverCurrency, 
                                        createdAt 
                                    }) => (
                                        <tr className="hover:bg-gray-100" key={id}>
                                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{transactionID}</td>
                                            <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                                                <div className="text-sm font-normal text-gray-500">
                                                    {sender.email === receiver.email ? (
                                                        <div className="text-base font-semibold text-gray-900">System</div>
                                                    ) : (
                                                        user.email === sender.email ? (
                                                            <div className="text-base font-semibold text-gray-900">You</div>
                                                        )  : (
                                                            <>
                                                                <div className="text-base font-semibold text-gray-900">{sender.name}</div>
                                                        
                                                                <div className="text-sm font-normal text-gray-500">{sender.email}</div>
                                                            </>
                                                        )
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4 items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                                                <div className="text-sm font-normal text-gray-500">
                                                {user.email === receiver.email ? (
                                                        <div className="text-base font-semibold text-gray-900">You</div>
                                                    )  : (
                                                        <>
                                                            <div className="text-base font-semibold text-gray-900">{receiver.name}</div>
                                                    
                                                            <div className="text-sm font-normal text-gray-500">{receiver.email}</div>
                                                        </>
                                                    )
                                                }
                                                </div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{senderCurrency.shortHand}</td>
                                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{receiverCurrency.shortHand}</td>
                                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{exchangeRate}</td>
                                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{amount.toLocaleString()}</td>
                                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{formatDate(createdAt, "MMM DD, YYYY hh:mm")}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transactions;