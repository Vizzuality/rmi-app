import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import MineSitePageComponent from 'components/pages/mine-sites';

class MineSitesPage extends Page {
  render() {
    return (
      <Layout
        title="Mine sites"
        description="Welcome to RMI | Mine sites"
      >
        <MineSitePageComponent />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(MineSitesPage);
