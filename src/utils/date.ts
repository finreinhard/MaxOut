import moment from 'moment';

export const getLastDays = (numberOfDays: number) => Array.from(
    {length: numberOfDays},
    (v, x) => moment().subtract(x, 'days').format('dd')
);
