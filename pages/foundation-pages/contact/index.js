import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import Contact from 'components/pages/foundation/contact';

// actions
import { getContact } from 'modules/static-content/static-content-actions';

class ContactPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    await context.store.dispatch(getContact({}));

    return { ...props };
  }


  render() {
    return (
      <Layout
        title="Contact | The Foundation"
        description="Welcome to RMI | Contact"
      >
        <Contact />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(ContactPage);
