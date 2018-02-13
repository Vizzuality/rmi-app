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
  [actions.setLeadingPracticesFilters]: (state, { payload }) => (
    {
      ...state,
      leadingPractices: {
        ...state.leadingPractices,
        filters: payload
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
    }),
  [actions.setTopics]: (state, { payload }) => (
    {
      ...state,
      topics: {
        ...state.topics,
        list: payload
      }
    }),
  [actions.setTopicsLoading]: (state, { payload }) => (
    {
      ...state,
      topics: {
        ...state.topics,
        loading: payload
      }
    }),
  [actions.setTopicsError]: (state, { payload }) => (
    {
      ...state,
      topics: {
        ...state.topics,
        error: payload
      }
    })
};
