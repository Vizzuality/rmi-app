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
        This is the foundation content by now
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  state => state,
  {}
)(FoundationPage);
