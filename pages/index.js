import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';

class FoundationPage extends Page {
  render() {
    return (
      <Layout
        title="Foundation"
        description="Welcome to RMI | Foundation"
      >
        <h1>Foundation</h1>
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(FoundationPage);
