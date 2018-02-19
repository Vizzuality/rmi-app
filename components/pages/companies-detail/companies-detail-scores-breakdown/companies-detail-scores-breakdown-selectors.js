
import { createSelector } from 'reselect';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';

const company = state => state.companies.list[0] || {};
const scores = state => (state.companies.list[0] || {}).scores;
const mineSites = state => (state.companies.list[0] || {}).mineSites;
const shareholders = state => (state.companies.list[0] || {}).shareholders;
const subsidiaries = state => (state.companies.list[0] || {}).subsidiaries;
const beneficialOwners = state => (state.companies.list[0] || {}).beneficialOwners;
const investmentDisputes = state => (state.companies.list[0] || {}).investmentDisputes;
const knownTaxJurisdictions = state =>
  (state.companies.list[0] || {}).companyCountryTaxJurisdictions || [];
const companiesScores = state => state.companies.companiesScores;

export const getOverallScores = createSelector(
  [scores],
  (_scores) => {
    const overallScores = _scores.filter(score => (score || {}).kind === 'overall_indicator');
    return overallScores.map(score => ({
      id: score.id,
      name: score.name,
      value: score.value
    }));
  }
);

export const parseMineSitesScores = createSelector(
  [mineSites],
  _mineSites =>
    _mineSites.map(mineSite => ({
      id: mineSite.id,
      name: mineSite.name,
      localProcurment: (mineSite.scores.find(score => score.slug.includes('ms-01-1')) || {}).value,
      localEmployment: (mineSite.scores.find(score => score.slug.includes('ms-02-1')) || {}).value,
      communityGrievance: (mineSite.scores.find(score => score.slug.includes('ms-03-1')) || {}).value,
      workersGrievance: (mineSite.scores.find(score => score.slug.includes('ms-04-1')) || {}).value,
      waterQuality: (mineSite.scores.find(score => score.slug.includes('ms-05-1')) || {}).value,
      biodiversity: (mineSite.scores.find(score => score.slug.includes('ms-06-1')) || {}).value,
      overall: (mineSite.scores.find(score => score.kind === 'overal_mine_site') || {}).value
    }))
);


export const getMeasurementScores = createSelector(
  [scores],
  (_scores) => {
    const measurementScores = _scores.filter(score => (score || {}).kind === 'measurement_area');
    const groupedByParent = groupBy(measurementScores, 'parentId');

    return Object.keys(groupedByParent).map((parentId) => {
      const scoreGroup = groupedByParent[parentId];
      const parentScore = _scores.find(score => score.id === parentId);

      return ({
        id: parentScore.id,
        name: parentScore.name,
        value: parentScore.value,
        children: scoreGroup.map(scoreChild => ({
          id: scoreChild.id,
          name: scoreChild.name,
          value: scoreChild.value
        }))
      });
    });
  }
);

export const getOverallMeasurementsScores = createSelector(
  [companiesScores, company],
  (_companiesScores, _company) => {
    const groupByKind = groupBy(_companiesScores, 'kind');

    return Object.keys(groupByKind).map((parentGrpoup, index) => {
      const scoreGroup = groupByKind[parentGrpoup];

      return ({
        id: index,
        name: scoreGroup[0].name,
        children: orderBy(scoreGroup, 'value', 'desc').map(scoreChild => ({
          id: scoreChild.id,
          currentCompany: scoreChild.companyId === +_company.id,
          value: scoreChild.value
        }))
      });
    });
  }
);

export const parseShareholders = createSelector(
  [shareholders],
  _shareholders => _shareholders.map(shareholder => ({
    id: shareholder.id,
    name: shareholder.name,
    value: shareholder.percentShares
  }))
);

export const parseSubsidiaries = createSelector(
  [subsidiaries],
  _subsidiaries => _subsidiaries.map(subsidiarie => ({
    id: subsidiarie.id,
    name: subsidiarie.name,
    value: subsidiarie.percentControlledOwnership
  }))
);

export const parseBeneficialOwners = createSelector(
  [beneficialOwners],
  _beneficialOwners => _beneficialOwners.map(beneficialOwner => ({
    id: beneficialOwner.id,
    name: beneficialOwner.name,
    value: beneficialOwner.percentOwnership
  }))
);

export const parseInvestmentDisputes = createSelector(
  [investmentDisputes],
  _investmentDisputes => _investmentDisputes.map(investmentDispute => ({
    id: investmentDispute.id,
    name: investmentDispute.investorStateDisputesCaseNumber,
    value: investmentDispute.investorStateDisputesCaseStatus
  }))
);

export const parseKnownTaxJurisdictions = createSelector(
  [knownTaxJurisdictions],
  _knownTaxJurisdictions => _knownTaxJurisdictions.map(knownTaxJurisdiction => ({
    id: knownTaxJurisdiction.id,
    name: knownTaxJurisdiction.country.name,
    value: knownTaxJurisdiction.disclosure
  }))
);


export default {
  getOverallScores,
  getMeasurementScores,
  getOverallMeasurementsScores,
  parseMineSitesScores,
  parseShareholders,
  parseSubsidiaries,
  parseBeneficialOwners,
  parseInvestmentDisputes,
  parseKnownTaxJurisdictions
};
