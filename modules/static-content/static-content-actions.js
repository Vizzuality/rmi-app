import { createAction, createThunkAction } from 'redux-tools';
import { Deserializer } from 'jsonapi-serializer';

// services
import FoundationHomepageService from 'services/foundation/homepage';
import MiningSocietyService from 'services/foundation/mining-society';
import ContactService from 'services/foundation/contact';
import AboutService from 'services/foundation/about';

export const setPageContent = createAction('static-content/setPageContent');
export const setPageContentLoading = createAction('static-content/setPageContentLoading');

export const getMiningSociety = createThunkAction('static-content/getMiningSociety', (_options = {}) =>
  (dispatch) => {
    const deserializer = new Deserializer({});

    return new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      MiningSocietyService.getMiningSociety(_options)
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

export const getHomePageContent = createThunkAction('static-content/getHomePage', (_options = {}) =>
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

export const getContact = createThunkAction('static-content/getContact', (_options = {}) =>
  (dispatch) => {
    const deserializer = new Deserializer({});

    return new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      ContactService.getContact(_options)
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

export const getAbout = createThunkAction('static-content/getAbout', (_options = {}) =>
  (dispatch) => {
    const deserializer = new Deserializer({});

    return new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      AboutService.getAbout(_options)
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
  getHomePageContent,
  getMiningSociety,
  getContact,
  getAbout
};
