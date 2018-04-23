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

class SourcesPage extends Page {
  static propTypes = { sourcesStatusPage: PropTypes.object }

  static defaultProps = { sourcesStatusPage: {} }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const state = context.store.getState();

    if (!state.staticPages.sources) {
      await context.store.dispatch(getStaticPage({
        key: 'sources',
        queryParams: {
          endpoint: 'sources',
          qParams: {}
        }
      }));
    }

    return { ...props };
  }

  render() {
    const { content, loading } = this.props.sourcesStatusPage;

    return (
      <Layout
        title="RMI | Sources"
        description="Welcome to RMI | Sources"
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
  state => ({ sourcesStatusPage: state.staticPages.sources }),
  {}
)(SourcesPage);
