import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const altfilters = {
    text: 'rent',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0)
}

export {filters, altfilters};