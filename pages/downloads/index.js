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

class DownloadPage extends Page {
  static propTypes = { downloadsPageStatus: PropTypes.object }

  static defaultProps = { downloadsPageStatus: {} }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const state = context.store.getState();

    if (!state.staticPages.downloads) {
      await context.store.dispatch(getStaticPage({
        key: 'downloads',
        queryParams: {
          endpoint: 'downloads',
          qParams: {}
        }
      }));
    }

    return { ...props };
  }

  render() {
    const { content, loading } = this.props.downloadsPageStatus;

    return (
      <Layout
        title="RMI | Downloads"
        description="Welcome to RMI | Downloads"
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
  state => ({ downloadsPageStatus: state.staticPages.downloads }),
  {}
)(DownloadPage);
