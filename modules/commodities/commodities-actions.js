import { createAction, createThunkAction } from 'redux-tools';
import { Deserializer } from 'jsonapi-serializer';

// services
import commoditiesService from 'services/commodities';

export const setCommodities = createAction('commodities/setCommodities');
export const setCommoditiesError = createAction('commodities/setCommoditiesError');

export const getCommodities = createThunkAction('commodities/getCommodities', _options =>
  (dispatch) => {
    const deserializer = new Deserializer({ keyForAttribute: 'camelCase' });

    return new Promise((resolve, reject) => {
      commoditiesService.getCommodities(_options)
        .then((data) => {
          deserializer.deserialize(data)
            .then((parsedData) => {
              resolve(parsedData);
              dispatch(setCommodities(parsedData));
            })
            .catch(errors => reject(errors));
        });
    });
  });

export default {
  setCommodities,
  setCommoditiesError
};
