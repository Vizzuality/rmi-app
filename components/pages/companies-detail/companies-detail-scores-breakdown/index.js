import { connect } from 'react-redux';
import CompaniesDetailScoresBreakdown from './companies-detail-scores-breakdown-component';
import {
  getOverallScores,
  getMeasurementScores,
  getOverallMeasurementsScores,
  parseMineSitesScores,
  parseShareholders,
  parseSubsidiaries,
  parseBeneficialOwners,
  parseInvestmentDisputes,
  parseKnownTaxJurisdictions
} from './companies-detail-scores-breakdown-selectors';

export default connect(
  state => ({
    overallScores: getOverallScores(state),
    measurementScores: getMeasurementScores(state),
    overallMeasurementScores: getOverallMeasurementsScores(state),
    mineSites: parseMineSitesScores(state),
    shareholders: parseShareholders(state),
    subsidiaries: parseSubsidiaries(state),
    beneficialOwners: parseBeneficialOwners(state),
    investmentDisputes: parseInvestmentDisputes(state),
    knownTaxJurisdictions: parseKnownTaxJurisdictions(state),
    company: state.companies.list
  }),
  {}
)(CompaniesDetailScoresBreakdown);
