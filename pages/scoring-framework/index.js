import React from 'react';
import PropTypes from 'prop-types';

import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';

// components
import StaticPageComponent from 'components/pages/static-page';

import { getStaticPage } from 'modules/static-pages/static-pages-actions';

class ScoringFrameworkPage extends Page {
  static propTypes = { scoringFrameworkPageStatus: PropTypes.object }

  static defaultProps = { scoringFrameworkPageStatus: {} }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const state = context.store.getState();

    if (!state.staticPages.scoringFramework) {
      await context.store.dispatch(getStaticPage({
        key: 'scoringFramework',
        queryParams: {
          endpoint: 'scoring-framework',
          qParams: {}
        }
      }));
    }

    return { ...props };
  }

  render() {
    const { content, loading } = this.props.scoringFrameworkPageStatus;

    return (
      <Layout
        title="RMI | Scoring Framework"
        description="Welcome to RMI | Scoring Framework"
      >
        <StaticPageComponent
          content={content}
          loading={loading}
        />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  state => ({ scoringFrameworkPageStatus: state.staticPages.scoringFramework }),
  {}
)(ScoringFrameworkPage);
