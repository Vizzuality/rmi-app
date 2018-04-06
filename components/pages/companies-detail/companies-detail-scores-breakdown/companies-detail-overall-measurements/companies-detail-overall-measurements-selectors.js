
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

const company = state => state.companies.list[0] || {};
const companiesScores = state => state.companies.companiesScores;

export const getOverallMeasurementsScores = createSelector(
  [companiesScores, company],
  (_companiesScores = [], _company = {}) => {
    const groupByKind = groupBy(_companiesScores, 'kind');

    return Object.keys(groupByKind).map((parentGrpoup, index) => {
      const scoreGroup = groupByKind[parentGrpoup];

      return ({
        id: index,
        name: scoreGroup[0].name,
        children: orderBy(scoreGroup, 'value', 'desc').map(scoreChild => ({
          id: scoreChild.id,
          currentCompany: scoreChild['company-id'] === +_company.id,
          currentCompanyName: _company.name,
          value: scoreChild.value
        }))
      });
    });
  }
);

export default { getOverallMeasurementsScores };
