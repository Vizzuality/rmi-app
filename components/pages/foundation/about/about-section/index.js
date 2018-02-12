import { connect } from 'react-redux';
import AboutSection from './about-section-component';

// selectors
import { getCurrentAboutSection } from './about-section-selectors';


export default connect(
  state => ({
    routes: state.routes,
    content: getCurrentAboutSection(state)
  }),
  {}
)(AboutSection);
