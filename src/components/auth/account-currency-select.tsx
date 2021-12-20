import SelectField from '@components/forms/select-field/select-field';
import useCurrency from '@data/use-currency';

const AccountCurrencySelect = ({ handleChange, handleBlur, values, touched, errors }) => {
    const { loading, error, data: currencies } = useCurrency();

    if (loading ) return null;

    if (error) {
        console.log(error);
        return null;
    }

    return (
        <SelectField
            id="currency" 
            name="currency" 
            label="Account Currency" 
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={values.currency} 
            error={touched.currency && errors.currency} 
            disabled={loading}
        >
            <option value="">Choose Currency</option>
            {currencies.map(({ id, currencyName, shortHand}) => <option key={id} value={id}>{`${currencyName} - ${shortHand}`}</option>)}
        </SelectField>
    )
}

export default AccountCurrencySelect;