import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import ScoringFramework from 'components/pages/foundation/scoring-framework';

// actions
// import { getScoringFramework } from 'components/pages/foundation/scoring-framework/scoring-framework-actions';

class ScoringFramworkPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    // await context.store.dispatch(getScoringFramework({}));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Scoring Framework | The Foundation"
        description="Welcome to RMI | Scoring Framework"
      >
        <ScoringFramework />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(ScoringFramworkPage);
