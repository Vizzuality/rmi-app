import { connect } from 'react-redux';

// actions
import { setFilters } from 'components/pages/mine-sites/mine-sites-actions';

// selectors
import { parseMineSites, geCurrentMineSiteOption } from './mine-sites-filters-selectors';

// component
import MineSiteFilters from './mine-sites-filters-component';

export default connect(
  state => ({
    mineSites: parseMineSites(state),
    selectedMineSite: state.mineSitesPage.filters.selectedMineSite
  }),
  { setFilters }
)(MineSiteFilters);
