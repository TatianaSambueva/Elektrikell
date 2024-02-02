
import moment from "moment";

export const getDefaultFrom = () => moment().subtract(10, 'hours').format();
export const getDefaultUntil = () => moment().add(1, 'day').format();

export const convertToInputForm = (dateTime) =>
    moment(dateTime).format('YYYY-MM-DDTHH:mm');

export const convertToRequestFormat = (dateTime) => moment(dateTime).format();

export const currentTimeStamp = () => moment().minutes(0).seconds(0).unix(1);

export const currentTimeStampMl = () => +moment();
export const addHourtoCurrentTSMl = () => +moment().add(1, 'hour');