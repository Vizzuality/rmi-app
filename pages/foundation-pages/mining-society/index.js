import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import MiningSociety from 'components/pages/foundation/mining-society';

// actions
import { getMiningSociety } from 'modules/static-content/static-content-actions';

class MiningSocietyPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getMiningSociety({}));

    return { ...props };
  }


  render() {
    return (
      <Layout
        title="Minging &amp; Society | The Foundation"
        description="Welcome to RMI | Minging &amp; Society"
      >
        <MiningSociety />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(MiningSocietyPage);
