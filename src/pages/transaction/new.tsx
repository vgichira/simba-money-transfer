import Layout from '@layouts/app-layout';

const NewTransaction = () => {
    return (
        <Layout title="Dashboard">
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="mb-1 w-full">
                    <div className="mb-4">
                        <nav className="flex mb-5" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                            <li className="inline-flex items-center">
                                <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">New Transaction</span>
                                </div>
                            </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">New Transaction</h1>

                        <div className="leading-loose">
                            <form className="m-4 pt-1 pr-20 bg-white rounded">
                                <div className="mt-2">
                                    <label className="block text-sm text-gray-600" htmlFor="cus_email">Recipient Email</label>
                                    <input className="w-full px-5 border-[#0891b2] py-4 text-gray-700 
                                    bg-gray-200 focus:ring-cyan-200 rounded" 
                                    id="cus_email" name="cus_email" type="text" required 
                                    placeholder="johndoe@company.com" aria-label="Email" />
                                </div>
                                <div className="pt-5 inline-block w-1/5 md:w-1/3 pr-1">
                                    <label className="block text-sm text-gray-600 mb-3" htmlFor="cus_email">Currency</label>
                                    <select className="w-full px-5 border-[#0891b2] py-4 text-gray-700 
                                    bg-gray-200 focus:ring-cyan-200 rounded" >
                                        <option value="">Select Currency</option>
                                    </select>
                                </div>
                                <div className="mt-2 inline-block w-4/5 md:w-2/3 pr-1">
                                    <label className="block text-sm text-gray-600 mb-3" htmlFor="cus_email">Amount to Send</label>
                                    <input className="w-full px-5 border-[#0891b2] py-4 text-gray-700 
                                    bg-gray-200 focus:ring-cyan-200 rounded" 
                                    id="cus_email" style={{height: '66px'}} name="cus_email" type="text" required 
                                    placeholder="2000" aria-label="Email" />
                                </div>
                                <div className="mt-4">
                                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NewTransaction;