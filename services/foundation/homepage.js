import * as queryString from 'query-string';

class HomepageService {
  /**
   * Retrieve data for foundation homepage
   * @param {*} options options used as query params
   */
  static getHomepage(options = {}) {
    const queryParams = queryString.stringify(options);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.API_URL}/foundation/homepage?${queryParams}`, {
        method: 'GET',
        headers: {
          Authorization: process.env.API_TOKEN
        }
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

export default HomepageService;
