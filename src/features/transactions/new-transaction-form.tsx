import { Formik } from 'formik';
import * as Yup from 'yup';
import PageHeader from '@layouts/header/page-header';
import CurrencySelect from '@components/currency/currency-select';

const initialValues = {
    email: '',
    currency: '',
    amount: ''
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    currency: Yup.string().required('Currency is required'),
    amount: Yup.string().required('Amount is required')
});

const NewTransactionForm = () => {
    const handleSubmit = () => {
        return;
    }
    return (
    <>
        <PageHeader title="New Transaction" />
        <div className="leading-loose">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
            {({
                errors, 
                handleBlur, 
                handleChange, 
                handleSubmit, 
                isSubmitting, 
                touched, 
                values, 
            }) => {
                const emailError = touched.email && errors.email;
                const currencyError = touched.currency && errors.currency;
                const amountError = touched.amount && errors.amount;
                return (
                    <form onSubmit={handleSubmit} className="m-4 pt-1 pr-20 bg-white rounded">
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" htmlFor="cus_email">Recipient Email</label>
                            <input className="w-full px-5 border-[#0891b2] py-4 text-gray-700 
                            bg-gray-200 focus:ring-cyan-200 rounded" 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="johndoe@company.com" 
                            onBlur={handleBlur}
                            onChange={handleChange} 
                            value={values.email} 
                            />
                            {emailError && <p className="mt-2 text-sm text-red-500 
                            dark:text-gray-400">{emailError}</p>}
                        </div>
                        <div className="flex">
                            <div className="pt-7 w-1/5 md:w-1/3 pr-1">
                                <CurrencySelect
                                    id="currency"
                                    name="currency"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.currency}
                                />
                                {currencyError && <p className="mt-2 text-sm text-red-500 
                                dark:text-gray-400">{currencyError}</p>}
                            </div>

                            <div className="pt-7 w-4/5 md:w-2/3">
                                <label className="block text-sm text-gray-600 mb-3" htmlFor="cus_email">Amount to Send</label>
                                <input className="w-full px-5 border-[#0891b2] py-4 text-gray-700 
                                bg-gray-200 focus:ring-cyan-200 rounded" 
                                id="amount" style={{height: '66px'}} name="amount" type="number" 
                                placeholder="2000"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.amount}
                                aria-label="Email" />
                                {amountError && <p className="mt-2 text-sm text-red-500 
                                dark:text-gray-400">{amountError}</p>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <button 
                            style={{backgroundColor: 'rgba(8,145,178,var(--tw-bg-opacity))'}} 
                            className="px-4 py-1 text-white font-light tracking-wider px-10
                            py-3.5 rounded-lg" disabled={isSubmitting} type="submit">
                            {isSubmitting ? "Loading..." : "Send to Vincent Muchiri"}
                            </button>
                        </div>
                    </form>
                )
            }}
            </Formik>
        </div>
    </>
    )
}

export default NewTransactionForm;