
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';

const scores = state => (state.companies.list[0] || {}).scores;
const mineSites = state => (state.companies.list[0] || {})['mine-sites'];
const shareholders = state => (state.companies.list[0] || {}).shareholders;
const subsidiaries = state => (state.companies.list[0] || {}).subsidiaries;
const beneficialOwners = state => (state.companies.list[0] || {})['beneficial-owners'];
const investmentDisputes = state => (state.companies.list[0] || {})['investment-disputes'];
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
  [mineSites],
  (_mineSites = []) =>
    _mineSites.map(mineSite => ({
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

export const parseShareholders = createSelector(
  [shareholders],
  (_shareholders = []) => ({
    fields: ['name', 'value'],
    headers: {
      name: 'As of:',
      value: 'Shares (%)'
    },
    values: _shareholders.map(shareholder => ({
      id: shareholder.id,
      name: shareholder.name,
      value: shareholder['percent-shares']
    }))
  })
);

export const parseSubsidiaries = createSelector(
  [subsidiaries],
  (_subsidiaries = []) => ({
    fields: ['name', 'value'],
    headers: {
      name: 'As of:',
      value: 'Shares (%)'
    },
    values: _subsidiaries.map(subsidiarie => ({
      id: subsidiarie.id,
      name: subsidiarie.name,
      value: subsidiarie['percent-controlled-ownership']
    }))
  })
);

export const parseBeneficialOwners = createSelector(
  [beneficialOwners],
  (_beneficialOwners = []) => ({
    fields: ['name', 'value'],
    headers: {
      name: 'As of:',
      value: 'Shares (%)'
    },
    values: _beneficialOwners.map(beneficialOwner => ({
      id: beneficialOwner.id,
      name: beneficialOwner.name,
      value: beneficialOwner['percent-ownership']
    }))
  })
);

export const parseInvestmentDisputes = createSelector(
  [investmentDisputes],
  (_investmentDisputes = []) => ({
    fields: ['number', 'date', 'description', 'status'],
    headers: {
      number: 'Case number',
      date: 'Case date',
      description: 'Case description',
      status: 'Status'
    },
    values: _investmentDisputes.map(investmentDispute => ({
      id: investmentDispute.id,
      number: investmentDispute.number,
      date: investmentDispute.date,
      description: investmentDispute.description,
      status: investmentDispute.status
    }))
  })
);

export const parseKnownTaxJurisdictions = createSelector(
  [knownTaxJurisdictions],
  (_knownTaxJurisdictions = []) => ({
    fields: ['name', 'value'],
    headers: {
      name: 'Country Name',
      value: 'Type of disclosure'
    },
    values: _knownTaxJurisdictions.map(knownTaxJurisdiction => ({
      id: knownTaxJurisdiction.id,
      name: knownTaxJurisdiction.country.name,
      value: knownTaxJurisdiction.disclosure
    }))
  })
);

export default {
  getOverallScores,
  getBreakdownScores,
  parseMineSitesScores,
  parseShareholders,
  parseSubsidiaries,
  parseBeneficialOwners,
  parseInvestmentDisputes,
  parseKnownTaxJurisdictions
};
