import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import StaticResult from 'components/pages/static-result';

// actions
import { getResultSection } from 'modules/static-content/static-content-actions';

class StaticResultsPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getResultSection({ 'filter[slug]': context.query.id }));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Results | Overall"
        description="Welcome to RMI | Results - Overall"
      >
        <StaticResult />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(StaticResultsPage);
