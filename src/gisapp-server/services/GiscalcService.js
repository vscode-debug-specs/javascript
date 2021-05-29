/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* route length
*
* routeRequest RouteRequest 
* returns routeLength
* */
const routeLength = ({ routeRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        routeRequest,
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
