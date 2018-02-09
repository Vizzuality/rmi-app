import { createAction, createThunkAction } from 'redux-tools';
import { Deserializer } from 'jsonapi-serializer';

import FoundationHomepageService from 'services/foundation/homepage';

export const setPageContent = createAction('foundation-homepage/setPageContent');
export const setPageContentLoading = createAction('foundation-homepage/setPageContentLoading');

export const getHomePageContent = createThunkAction('foundation-homepage/getHomePageContent', (_options = {}) =>
  (dispatch) => {
    const deserializer = new Deserializer({});

    return new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      FoundationHomepageService.getHomepage(_options)
        .then((data) => {
          deserializer.deserialize(data)
            .then((parsedData) => {
              resolve(parsedData);
              dispatch(setPageContentLoading(false));
              dispatch(setPageContent(parsedData));
            })
            .catch(errors => reject(errors));
        });
    });
  });


export default {
  setPageContent,
  setPageContentLoading,
  getHomePageContent
};
