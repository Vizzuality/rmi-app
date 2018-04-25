import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import FoundationHomepage from 'components/pages/foundation/homepage';

// actions
import { getHomePageContent } from 'modules/static-content/static-content-actions';

class FoundationPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getHomePageContent({ include: ['news'].join(',') }));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="The Foundation"
        description="Welcome to RMI | Foundation"
      >
        <FoundationHomepage />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(FoundationPage);
