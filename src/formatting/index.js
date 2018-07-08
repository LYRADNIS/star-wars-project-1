import moment from 'moment';

export const formatDate = date => date ? moment(date).format('dddd, MMMM D YYYY').toString() : null;
