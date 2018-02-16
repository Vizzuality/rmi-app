// redux
import { connect } from 'react-redux';

import { getHomePageContent } from 'modules/static-content/static-content-actions';
import FoundationHomepage from './foundation-homepage-component';


export default connect(
  state => ({ content: state.staticContent.content }),
  { getHomePageContent }
)(FoundationHomepage);
