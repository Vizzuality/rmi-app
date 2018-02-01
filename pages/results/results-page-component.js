import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';

class ResultsPage extends Page {
  render() {
    return (
      <Layout
        title="Index"
        description="Welcome to RMI | Results"
      >
        This is the results content by now
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  state => state,
  {}
)(ResultsPage);
