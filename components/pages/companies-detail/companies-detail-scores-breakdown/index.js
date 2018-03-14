import { connect } from 'react-redux';
import CompaniesDetailScoresBreakdown from './companies-detail-scores-breakdown-component';
import {
  getOverallScores,
  getBreakdownScores,
  parseMineSitesScores,
  parseKnownTaxJurisdictions
} from './companies-detail-scores-breakdown-selectors';

export default connect(
  state => ({
    overallScores: getOverallScores(state),
    breakdownScores: getBreakdownScores(state),
    mineSites: parseMineSitesScores(state),
    shareholders: (state.companies.list[0] || {}).shareholders,
    subsidiaries: (state.companies.list[0] || {}).subsidiaries,
    beneficialOwners: (state.companies.list[0] || {})['beneficial-owners'],
    investmentDisputes: (state.companies.list[0] || {})['investment-disputes'],
    knownTaxJurisdictions: parseKnownTaxJurisdictions(state),
    company: state.companies.list
  }),
  {}
)(CompaniesDetailScoresBreakdown);
