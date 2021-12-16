import Link from 'next/link';
import PageHeader from '@layouts/header/page-header';

const Transactions = () => {
    const renderTransactions = () => {
        return (
            [1, 2, 3, 4, 5, 6, 7, 8].map((current) => (
                <tr className="hover:bg-gray-100" key={current}>
                    <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">#{current}</td>
                    <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500">
                            <div className="text-base font-semibold text-gray-900">Vincent Muchiri</div>
                            <div className="text-sm font-normal text-gray-500">test@test.com</div>
                        </div>
                    </td>
                    <td className="p-4 items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500">
                            <div className="text-base font-semibold text-gray-900">Vincent Muchiri</div>
                            <div className="text-sm font-normal text-gray-500">test@test.com</div>
                        </div>
                    </td>
                    <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">USD</td>
                    <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">April 16, 2019 17:37</td>
                    <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">April 16, 2019 17:37</td>
                </tr>
            ))
        )
    }

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
                                            Currency
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Created At
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Updated At
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {renderTransactions()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4">
                <div className="flex items-center mb-4 sm:mb-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                    <span className="text-sm font-normal text-gray-500">Showing <span className="text-gray-900 font-semibold">1-20</span> of <span className="text-gray-900 font-semibold">2290</span></span>
                </div>
                <div className="flex items-center space-x-3">
                    <a href="#" className="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center">
                        <svg className="-ml-1 mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Previous
                    </a>
                    <a href="#" className="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center">
                        Next
                        <svg className="-mr-1 ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Transactions;