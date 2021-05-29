/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* route length
*
* point List route
* returns inline_response_200
* */
const routeLength = ({ point }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        point,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  routeLength,
};
