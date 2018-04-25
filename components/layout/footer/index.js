
import { connect } from 'react-redux';
import FooterComponent from './footer-component';

export default connect(
  state => ({
    root: state.routes.root,
    currentLanguage: state.language.current
  }),
  {}
)(FooterComponent);
