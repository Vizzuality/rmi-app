import * as actions from './leading-practices-actions';

export default {
  [actions.setLeadingPractices]: (state, { payload }) => (
    {
      ...state,
      leadingPractices: {
        ...state.leadingPractices,
        list: payload
      }
    }),
  [actions.setLeadingPracticesLoading]: (state, { payload }) => (
    {
      ...state,
      leadingPractices: {
        ...state.leadingPractices,
        loading: payload
      }
    }),
  [actions.setPaginationPage]: (state, { payload }) => (
    {
      ...state,
      leadingPractices: {
        ...state.leadingPractices,
        pagination: {
          ...state.leadingPractices.pagination,
          page: payload
        }
      }
    }),
  [actions.setPaginationSize]: (state, { payload }) => (
    {
      ...state,
      leadingPractices: {
        ...state.leadingPractices,
        pagination: {
          ...state.leadingPractices.pagination,
          size: payload
        }
      }
    })
};
