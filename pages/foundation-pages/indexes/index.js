import React from 'react';

import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';

// components
import IndexesPageComponent from 'components/pages/foundation/indexes';

class FoundationIndexesPage extends Page {
  render() {
    return (
      <Layout
        title="RMI "
        description="Welcome to RMI"
      >
        <IndexesPageComponent />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  null,
  null
)(FoundationIndexesPage);
