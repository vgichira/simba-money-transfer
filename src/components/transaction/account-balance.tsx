import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { getAccountBalance } from '@data/use-user';
import { getExchangeRate } from '@data/use-currency';
import { formatCurrency } from '@utils/formatter';

const AccountBalance = () => {
    let user: any = null;
    const { data: session} = useSession();
    const [balances, setBalances] = useState([]);

    user = session.user

    useEffect(() => {
        async function fetchBalances() {
            const { data: currencies} = await axios.get(`/api/currencies`);

            const accountBalance = await getAccountBalance();

            const accountCurrency = currencies.find(currency => currency.id === Number(user.accountCurrency));

            const balances = await Promise.all(currencies.map(async (currency) => {
                return {
                    currency_name: currency.shortHand, 
                    amount: accountBalance.account_balance * await getExchangeRate(accountCurrency.shortHand, currency.shortHand)
                }
            }));

            setBalances(balances)
        }

        fetchBalances()
    }, [user.accountCurrency]);

    return (
        <div className=' space-x-2 w-full bg-white shadow-md rounded-lg overflow-hidden mb-3'>
            <div className="card  min-w-sm border border-gray-100 bg-purple-100 pt-12 transition-shadow shadow-xl hover:shadow-xl min-w-max">
            <div className="flex items-center p-4">
                <div className="relative flex flex-col items-center w-full">
                    <div className="flex flex-col space-y-1 -mt-12 w-full">
                        <span className="text-md whitespace-nowrap text-gray-800 font-semibold">Account Balance</span>
                        {balances.map((balance, key) => {
                            return (
                                <span key={key} 
                                className="text-md whitespace-nowrap text-gray-600">
                                    {formatCurrency(balance.currency_name ,balance.amount)}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AccountBalance;