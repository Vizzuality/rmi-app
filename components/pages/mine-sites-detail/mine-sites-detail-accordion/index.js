import { connect } from 'react-redux';

// selectors
import { getMineSiteIndicatorsTree } from './mine-sites-detail-accordion-selectors';

// component
import MineSitesDetailAccordion from './mine-sites-detail-accordion-component';

export default connect(
  state => ({ data: getMineSiteIndicatorsTree(state) }),
  {}
)(MineSitesDetailAccordion);

