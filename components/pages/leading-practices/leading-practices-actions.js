import { createAction, createThunkAction } from 'redux-tools';
import { Deserializer } from 'jsonapi-serializer';

import LeadingPracticesService from 'services/leading-practices';
import TopicsService from 'services/topics';

export const setLeadingPractices = createAction('leading-practices-page/setLeadingPractices');
export const setLeadingPracticesFilters = createAction('leading-practices-page/setLeadingPracticesFilters');
export const setLeadingPracticesLoading = createAction('leading-practices-page/setLeadingPracticesLoading');
export const setTopics = createAction('leading-practices-page/setTopics');
export const setTopicsLoading = createAction('leading-practices-page/setTopicsLoading');
export const setTopicsError = createAction('leading-practices-page/setTopicsError');
export const setPaginationPage = createAction('leading-practices-page/setPaginationPage');
export const setPaginationSize = createAction('leading-practices-page/setPaginationSize');

export const getLeadingPractices = createThunkAction('leading-practices-page/getLeadingPractices', (_options = {}) =>
  (dispatch, getState) => {
    const { leadingPracticesPage } = getState();
    const { pagination, filters } = leadingPracticesPage.leadingPractices;
    const { topic } = filters;
    const { limit, page } = pagination;
    const deserializer = new Deserializer({});

    const options = {
      ..._options,
      'filter[topic]': topic,
      'page[number]': page,
      'page[size]': limit
    };

    return new Promise((resolve, reject) => {
      dispatch(setLeadingPracticesLoading(true));

      LeadingPracticesService.getLeadingPractices(options)
        .then((data) => {
          dispatch(setPaginationSize(data.meta['record-count']));

          deserializer.deserialize(data)
            .then((parsedData) => {
              resolve(parsedData);
              dispatch(setLeadingPracticesLoading(false));
              dispatch(setLeadingPractices(parsedData));
            })
            .catch(errors => reject(errors));
        });
    });
  });

export const getTopics = createThunkAction('leading-practices-page/getTopics', (_options = {}) =>
  (dispatch) => {
    const deserializer = new Deserializer({});

    return new Promise((resolve, reject) => {
      dispatch(setTopicsLoading(true));

      TopicsService.getTopics(_options)
        .then((data) => {
          deserializer.deserialize(data)
            .then((parsedData) => {
              resolve(parsedData);
              dispatch(setTopicsLoading(false));
              dispatch(setTopics(parsedData));
            })
            .catch(errors => reject(errors));
        });
    });
  });


export default {
  setLeadingPractices,
  setLeadingPracticesLoading,
  getLeadingPractices,
  setPaginationPage,
  setPaginationSize,
  setTopics,
  setTopicsLoading,
  setTopicsError,
  getTopics
};
