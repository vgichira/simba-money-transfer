import PageHeader from '@layouts/header/page-header';
import CurrencySelect from '@components/currency/currency-select';

const NewTransactionForm = () => (
    <>
        <PageHeader title="New Transaction" />
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
                    <CurrencySelect />
                </div>

                <div className="mt-2 inline-block w-4/5 md:w-2/3 pr-1">
                    <label className="block text-sm text-gray-600 mb-3" htmlFor="cus_email">Amount to Send</label>
                    <input className="w-full px-5 border-[#0891b2] py-4 text-gray-700 
                    bg-gray-200 focus:ring-cyan-200 rounded" 
                    id="cus_email" style={{height: '66px'}} name="cus_email" type="text" required 
                    placeholder="2000" aria-label="Email" />
                </div>
                <div className="mt-4">
                    <button 
                    style={{backgroundColor: 'rgba(8,145,178,var(--tw-bg-opacity))'}} 
                    className="px-4 py-1 text-white font-light tracking-wider px-10
                    py-3.5 rounded-lg" type="submit">Send KES 30,000 to Vincent Muchiri</button>
                </div>
            </form>
        </div>
    </>
)

export default NewTransactionForm;