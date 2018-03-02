import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import ResultsOverall from 'components/pages/results-overall';

// actions
import { getScores } from 'modules/scores/scores-actions';

class ResultsOverallPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getScores({
      include: ['company'].join(','),
      'filter[kind]': 'overall_indicator',
      'page[size]': 1000
    }));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Results | Overall"
        description="Welcome to RMI | Results - Overall"
      >
        <ResultsOverall />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(ResultsOverallPage);
