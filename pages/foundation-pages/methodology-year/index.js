import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import MethodologyYear from 'components/pages/foundation/methodology-year';

// actions
import { getMethodologyYear } from 'modules/static-content/static-content-actions';

class MethodologyYearPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getMethodologyYear({}));

    return { ...props };
  }


  render() {
    return (
      <Layout
        title="Methodology 2017 | The Foundation"
        description="Welcome to RMI | Methodology 2017"
      >
        <MethodologyYear />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(MethodologyYearPage);
