import { createAction, createThunkAction } from 'redux-tools';
import Jsona from 'jsona';

// services
import StaticPagesService from 'services/static-pages';

export const setPageContent = createAction('static-pages/setPageContent');
export const setPageContentLoading = createAction('static-pages/setPageContentLoading');

export const getStaticPage = createThunkAction('static-pages/getStaticPage', (_options = {}) =>
  (dispatch) => {
    const { key, queryParams } = _options;
    return new Promise((resolve, reject) => {
      dispatch(setPageContentLoading({ key, loading: true }));

      StaticPagesService.getResultsTree(queryParams)
        .then((data) => {
          const parsedData = new Jsona().deserialize(data);
          dispatch(setPageContentLoading({ key, loading: false }));

          resolve(parsedData);
          dispatch(setPageContent({
            key,
            content: parsedData
          }));
        }).catch(errors => reject(errors));
    });
  });


export default {
  setPageContent,
  setPageContentLoading,
  getStaticPage
};
