import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import indicatorsService from 'services/indicators';

export const setIndicators = createAction('indicators/setIndicators');

export const getIndicators = createThunkAction('indicators/getIndicators', _options =>
  dispatch =>
    new Promise((resolve, reject) => {
      indicatorsService.getIndicators(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          resolve(parsedData);
          dispatch(setIndicators(parsedData));
        }).catch(errors => reject(errors));
    }));

export default { setIndicators };
