import { connect } from 'react-redux';

// selectors
import { parseCountries, getCountries } from './mine-sites-detail-country-comparison-selectors';

// component
import MineSitesDetailComparisonCountry from './mine-sites-detail-country-comparison-component';

export default connect(
  state => ({
    countries: getCountries(state),
    data: parseCountries(state),
    currentLanguage: state.language.current
  }),
  {}
)(MineSitesDetailComparisonCountry);
