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

class CorrigendaPage extends Page {
  static propTypes = { corrigendaStatusPage: PropTypes.object }

  static defaultProps = { corrigendaStatusPage: {} }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const state = context.store.getState();

    if (!state.staticPages.corrigenda) {
      await context.store.dispatch(getStaticPage({
        key: 'corrigenda',
        queryParams: {
          endpoint: 'foundation/corrigenda',
          qParams: {}
        }
      }));
    }

    return { ...props };
  }

  render() {
    const { content, loading } = this.props.corrigendaStatusPage;

    return (
      <Layout
        title="RMI | Corrigenda"
        description="Welcome to RMI | Corrigenda"
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
  state => ({ corrigendaStatusPage: state.staticPages.corrigenda }),
  {}
)(CorrigendaPage);
