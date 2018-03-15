
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';

const scores = state => (state.companies.list[0] || {}).scores;
const selectedMineSites = state => (state.companies.list[0] || {})['selected-mine-sites'];
const knownTaxJurisdictions = state =>
  (state.companies.list[0] || {})['company-country-tax-jurisdictions'];

export const getOverallScores = createSelector(
  [scores],
  (_scores = []) => {
    const overallScores = _scores.filter(score => (score || {}).kind === 'overall_indicator');
    return overallScores.map(score => ({
      id: score.id,
      name: score.label,
      value: score.value
    }));
  }
);

export const parseMineSitesScores = createSelector(
  [selectedMineSites],
  (_selectedMineSites = []) =>
    _selectedMineSites.map(mineSite => ({
      id: mineSite.id,
      name: mineSite.name,
      localProcurment: ((mineSite.scores || []).find(score => score.slug.includes('ms-01-1')) || {}).value,
      localEmployment: ((mineSite.scores || []).find(score => score.slug.includes('ms-02-1')) || {}).value,
      communityGrievance: ((mineSite.scores || []).find(score => score.slug.includes('ms-03-1')) || {}).value,
      workersGrievance: ((mineSite.scores || []).find(score => score.slug.includes('ms-04-1')) || {}).value,
      waterQuality: ((mineSite.scores || []).find(score => score.slug.includes('ms-05-1')) || {}).value,
      biodiversity: ((mineSite.scores || []).find(score => score.slug.includes('ms-06-1')) || {}).value,
      overall: ((mineSite.scores || []).find(score => score.kind === 'overal_mine_site') || {}).value
    }))
);


export const getBreakdownScores = createSelector(
  [scores],
  (_scores = []) => {
    const breakdownScores = _scores.filter(score => (score || {}).kind === 'breakdown');
    const groupedByParent = groupBy(breakdownScores, 'parent-id');

    return Object.keys(groupedByParent).map((parentId) => {
      const scoreGroup = groupedByParent[parentId];
      const parentScore = _scores.find(score => score.id === parentId);

      return ({
        id: parentScore.id,
        name: parentScore.label,
        slug: parentScore.slug,
        value: parentScore.value,
        children: scoreGroup.map(scoreChild => ({
          id: scoreChild.id,
          name: scoreChild.label,
          value: scoreChild.value
        }))
      });
    });
  }
);

export const parseKnownTaxJurisdictions = createSelector(
  [knownTaxJurisdictions],
  (_knownTaxJurisdictions = []) => {
    const numberRows = 6;
    const totalRows = (_knownTaxJurisdictions.length / numberRows) > parseInt(_knownTaxJurisdictions.length / numberRows, 10) ?
      parseInt(_knownTaxJurisdictions.length / numberRows, 10) + 1 : parseInt(_knownTaxJurisdictions.length / numberRows, 10);
    const slides = [];
    const parsed = [];

    for (let i = 0; i < totalRows; i++) {
      const limit = ((i * numberRows) + numberRows);
      const slicedJurisdictions = _knownTaxJurisdictions.slice(i * numberRows, limit);
      slides.push(slicedJurisdictions);
    }

    for (let i = 0; i < slides.length; i++) {
      const jurisdictions = slides[i];
      parsed.push({
        jurisdiction1: jurisdictions[0],
        jurisdiction2: jurisdictions[1],
        jurisdiction3: jurisdictions[2],
        jurisdiction4: jurisdictions[3],
        jurisdiction5: jurisdictions[4],
        jurisdiction6: jurisdictions[5]
      });
    }

    return parsed;
  }
);

export default {
  getOverallScores,
  getBreakdownScores,
  parseMineSitesScores,
  parseKnownTaxJurisdictions
};
