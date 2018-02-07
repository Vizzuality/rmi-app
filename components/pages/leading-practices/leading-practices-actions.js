import { createAction, createThunkAction } from 'redux-tools';
import { Deserializer } from 'jsonapi-serializer';

import LeadingPracticesService from 'services/leading-practices';

export const setLeadingPractices = createAction('leading-practices-page/setLeadingPractices');
export const setLeadingPracticesLoading = createAction('leading-practices-page/setLeadingPracticesLoading');
export const setPaginationPage = createAction('leading-practices-page/setPaginationPage');
export const setPaginationSize = createAction('leading-practices-page/setPaginationSize');

export const getLeadingPractices = createThunkAction('leading-practices-page/getLeadingPractices', (_options = {}) =>
  (dispatch, getState) => {
    const { leadingPracticesPage } = getState();
    const { pagination } = leadingPracticesPage.leadingPractices;
    const { limit, page } = pagination;
    const deserializer = new Deserializer({});

    const options = {
      ..._options,
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


export default {
  setLeadingPractices,
  setLeadingPracticesLoading,
  getLeadingPractices,
  setPaginationPage,
  setPaginationSize
};
