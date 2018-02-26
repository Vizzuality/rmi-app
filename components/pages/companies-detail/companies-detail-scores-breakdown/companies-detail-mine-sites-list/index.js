import { connect } from 'react-redux';
import CompaniesDetailMineSitesList from './companies-detail-mine-sites-list-component';

import { getClosedMineSites, getAssetsSoldAfterMay } from './companies-detail-mine-sites-list-selectors';

export default connect(
  state => ({
    allMineSites: (state.companies.list[0] || {})['mine-sites'],
    closedMineSites: getClosedMineSites(state),
    assetsSoldAfterMay: getAssetsSoldAfterMay(state)
  }),
  {}
)(CompaniesDetailMineSitesList);
