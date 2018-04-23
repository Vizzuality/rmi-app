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

class MethodologyPage extends Page {
  static propTypes = { methodologyStatusPage: PropTypes.object }

  static defaultProps = { methodologyStatusPage: {} }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const state = context.store.getState();

    if (!state.staticPages.methodology) {
      await context.store.dispatch(getStaticPage({
        key: 'methodology',
        queryParams: {
          endpoint: 'foundation/methodology',
          qParams: {}
        }
      }));
    }

    return { ...props };
  }

  render() {
    const { content, loading } = this.props.methodologyStatusPage;

    return (
      <Layout
        title="RMI | Application of Methodology"
        description="Welcome to RMI | Application of Methodology"
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
  state => ({ methodologyStatusPage: state.staticPages.methodology }),
  {}
)(MethodologyPage);
