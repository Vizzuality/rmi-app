import { connect } from 'react-redux';
import CompaniesDetailMineSitesList from './companies-detail-mine-sites-list-component';

import { getClosedMineSites, getAssetsSoldAfterMay, getAllMineSites, hasJointVentureExcluded } from './companies-detail-mine-sites-list-selectors';

export default connect(
  state => ({
    allMineSites: getAllMineSites(state),
    closedMineSites: getClosedMineSites(state),
    assetsSoldAfterMay: getAssetsSoldAfterMay(state),
    hasJointVentureExcluded: hasJointVentureExcluded(state)
  }),
  {}
)(CompaniesDetailMineSitesList);
