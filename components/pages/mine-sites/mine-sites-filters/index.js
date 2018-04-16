import { connect } from 'react-redux';

// selectors
import { parseMineSites } from './mine-sites-filters-selectors';

// component
import MineSiteFilters from './mine-sites-filters-component';

export default connect(
  state => ({ mineSites: parseMineSites(state) }),
  {}
)(MineSiteFilters);
