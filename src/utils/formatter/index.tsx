import Moment from 'react-moment';

export const formatDate = (date: Date, format: string) => {
    return <Moment format={format}>{date}</Moment>
}