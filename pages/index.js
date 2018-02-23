import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import IndexPage from 'components/pages/index-homepage';

class FoundationPage extends Page {
  render() {
    return (
      <Layout
        title="Index"
        description="Welcome to RMI | Index"
      >
        <IndexPage />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(FoundationPage);
