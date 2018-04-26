import { connect } from 'react-redux';

import CompaniesDetailScoresBreakdown from './companies-detail-scores-breakdown-component';
import {
  getBreakdownScores,
  parseMineSitesScores,
  parseKnownTaxJurisdictions,
  parseShareholders,
  parseInvestmentDisputes
} from './companies-detail-scores-breakdown-selectors';

export default connect(
  state => ({
    breakdownScores: getBreakdownScores(state),
    mineSites: parseMineSitesScores(state),
    shareholders: parseShareholders(state),
    investmentDisputes: parseInvestmentDisputes(state),
    knownTaxJurisdictions: parseKnownTaxJurisdictions(state),
    company: state.companies.list,
    responsive: state.responsive,
    currentLanguage: state.language.current
  }),
  {}
)(CompaniesDetailScoresBreakdown);
