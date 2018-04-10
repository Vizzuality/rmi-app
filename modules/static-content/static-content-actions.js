import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import FoundationHomepageService from 'services/foundation/homepage';
import MiningSocietyService from 'services/foundation/mining-society';
import ContactService from 'services/foundation/contact';
import AboutService from 'services/foundation/about';
import MediaService from 'services/foundation/media';
import ResultsSectionService from 'services/results-section';

export const setPageContent = createAction('static-content/setPageContent');
export const setPageContentLoading = createAction('static-content/setPageContentLoading');
export const setResourceId = createAction('static-content/setResourceId');

export const getMiningSociety = createThunkAction('static-content/getMiningSociety', (_options = {}) =>
  dispatch =>
    new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      MiningSocietyService.getMiningSociety(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          dispatch(setPageContentLoading(false));

          resolve(parsedData);
          dispatch(setPageContent(parsedData));
        }).catch(errors => reject(errors));
    }));

export const getHomePageContent = createThunkAction('static-content/getHomePage', (_options = {}) =>
  dispatch =>
    new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      FoundationHomepageService.getHomepage(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          dispatch(setPageContentLoading(false));

          resolve(parsedData);
          dispatch(setPageContent(parsedData));
        }).catch(errors => reject(errors));
    }));

export const getContact = createThunkAction('static-content/getContact', (_options = {}) =>
  dispatch =>
    new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      ContactService.getContact(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          dispatch(setPageContentLoading(false));

          resolve(parsedData);
          dispatch(setPageContent(parsedData));
        }).catch(errors => reject(errors));
    }));

export const getAbout = createThunkAction('static-content/getAbout', (_options = {}) =>
  dispatch =>
    new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      AboutService.getAbout(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          dispatch(setPageContentLoading(false));

          resolve(parsedData);
          dispatch(setPageContent(parsedData));
        }).catch(errors => reject(errors));
    }));

export const getMedia = createThunkAction('static-content/getMedia', (_options = {}) =>
  dispatch =>
    new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      MediaService.getMedia(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          dispatch(setPageContentLoading(false));

          resolve(parsedData);
          dispatch(setPageContent(parsedData));
        }).catch(errors => reject(errors));
    }));

export const getResultSection = createThunkAction('static-content/getResultSection', (_options = {}) =>
  dispatch =>
    new Promise((resolve, reject) => {
      dispatch(setPageContentLoading(true));

      ResultsSectionService.getResultsTree(_options)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          dispatch(setPageContentLoading(false));

          resolve(parsedData);
          dispatch(setPageContent(parsedData));
        }).catch(errors => reject(errors));
    }));

export default {
  setPageContent,
  setPageContentLoading,
  setResourceId,
  getHomePageContent,
  getMiningSociety,
  getContact,
  getAbout,
  getMedia,
  getResultSection
};
