import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import Methodology from 'components/pages/foundation/methodology';

// actions
import { getMethodology } from 'components/pages/foundation/methodology/methodology-actions';

class MethodologyPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getMethodology({}));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Methodology | The Foundation"
        description="Welcome to RMI | Methodology"
      >
        <Methodology />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(MethodologyPage);
