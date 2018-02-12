import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';

// actions
import { getHomePageContent } from 'components/pages/foundation/homepage/foundation-homepage-actions';

class MiningSocietyPage extends Page {
  render() {
    return (
      <Layout
        title="Mining and Society"
        description="Welcome to RMI | Mining and Society"
      >
        <h1>Mining and Society</h1>
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(MiningSocietyPage);
