
const moment = jest.requireActual('moment');

export default (timestemp = 0) => {
    return moment(timestemp);
};