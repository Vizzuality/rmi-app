import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import LibraryPageComponent from 'components/pages/library';

class LibraryPage extends Page {
  render() {
    return (
      <Layout
        title="Library"
        description="Welcome to RMI | Library"
      >
        <LibraryPageComponent />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(LibraryPage);
