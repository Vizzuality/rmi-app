import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// actions
import { getSubsidiaries } from 'modules/subsidiaries/subsidiaries-actions';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import SubsidiariesPageComponent from 'components/pages/subsidiaries';

class SubsidiariesPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    // gets subsidiaries
    await context.store.dispatch(getSubsidiaries({
      include: ['company', 'country'].join(','),
      sort: 'name'
    }));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Subsidiaries"
        description="Welcome to RMI | Subsidiaries"
      >
        <SubsidiariesPageComponent />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(SubsidiariesPage);
