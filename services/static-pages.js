import * as queryString from 'query-string';

class StaticPagesService {
  /**
   * Retrieve static page content
   * @param {*} options contains endpoint and queryparams
   */
  static getTopics(options = {}) {
    const { endpoint, qParams } = options;
    const queryParams = queryString.stringify(qParams);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.API_URL}/${endpoint}?${queryParams}`, {
        method: 'GET',
        headers: { Authorization: process.env.API_TOKEN }
      })
        .then((response) => {
          const { status, statusText } = response;

          if (status === 200) return response.json();

          const errorObject = {
            errors: {
              status,
              details: statusText
            }
          };
          throw errorObject;
        })
        .then(data => resolve(data))
        .catch(errors => reject(errors));
    });
  }
}

export default StaticPagesService;
