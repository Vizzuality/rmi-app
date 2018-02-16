// redux
import { connect } from 'react-redux';

// selectors
import { parseAboutSections } from './about-sections-card-list-selectors';

import AboutSectionCardList from './about-sections-card-list-component';

export default connect(
  state => ({ aboutSections: parseAboutSections(state) }),
  {}
)(AboutSectionCardList);
