import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';

class ContactPage extends Page {
  render() {
    return (
      <Layout
        title="Contact"
        description="Welcome to RMI | Contact"
      >
        <h1>Contact</h1>
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(ContactPage);
