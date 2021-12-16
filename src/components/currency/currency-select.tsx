import useCurrency from '@data/use-currency';

const CurrencySelect = (props) => {
    const { loading, error, data: currencies } = useCurrency();

    if (loading ) return null;

    if (error) {
        console.log(error);
        return null;
    }

    return (
        <>
            <label className="block text-sm text-gray-600 mb-3" htmlFor="cus_email">Currency</label>
            <select disabled={loading} className="w-full px-5 border-[#0891b2] py-4 text-gray-700 
            bg-gray-200 focus:ring-cyan-200 rounded" {...props}>
                <option value="">Select Currency</option>
                {currencies.map(({ id, shortHand}) => <option key={id} value={id}>{shortHand}</option>
                )}
            </select>
        </>
    )
}

export default CurrencySelect;