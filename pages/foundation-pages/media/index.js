import React from 'react';
import PropTypes from 'prop-types';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import Media from 'components/pages/foundation/media';

// actions
import { getMedia } from 'modules/static-content/static-content-actions';

class MediaPage extends Page {
  static propTypes = { mediaSection: PropTypes.string }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getMedia({ include: ['media-releases'].join(',') }));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Media | The Foundation"
        description="Welcome to RMI | Media"
      >
        <Media />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(MediaPage);
