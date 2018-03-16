import { connect } from 'react-redux';

import CompaniesDetailScoresBreakdown from './companies-detail-scores-breakdown-component';
import {
  getOverallScores,
  getBreakdownScores,
  parseMineSitesScores,
  parseKnownTaxJurisdictions,
  parseShareholders,
  parseBeneficialOwners,
  parseInvestmentDisputes
} from './companies-detail-scores-breakdown-selectors';

export default connect(
  state => ({
    overallScores: getOverallScores(state),
    breakdownScores: getBreakdownScores(state),
    mineSites: parseMineSitesScores(state),
    shareholders: parseShareholders(state),
    beneficialOwners: parseBeneficialOwners(state),
    investmentDisputes: parseInvestmentDisputes(state),
    knownTaxJurisdictions: parseKnownTaxJurisdictions(state),
    company: state.companies.list
  }),
  {}
)(CompaniesDetailScoresBreakdown);
