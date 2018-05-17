import * as queryString from 'query-string';

class MineSitesService {

  /**
   * Retrieve mine sites
   * @param {*} options options used as query params
   */
  static getMineSites(options = {}) {
    const queryParams = queryString.stringify(options);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.API_URL}/mine-sites?${queryParams}`, {
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

  /**
   * Retrieve a mine site
   * @param {*} mineSiteId id of the mine site we want to get
   * @param {*} options options used as query params
   */
  static getMineSite(mineSiteId, options = {}) {
    const queryParams = queryString.stringify(options);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.API_URL}/mine-sites/${mineSiteId}?${queryParams}`, {
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

          throw new Error(errorObject);
        })
        .then(data => resolve(data))
        .catch(errors => reject(errors));
    });
  }
}

export default MineSitesService;
