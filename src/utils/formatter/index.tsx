import Moment from 'react-moment';

export const formatDate = (date: Date, format: string) => {
    return <Moment format={format}>{date}</Moment>
}

export const formatCurrency = (currency: string, amount: number): string => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currencyDisplay: 'code',
        currency: currency,
    })

    return formatter.format(amount)
}