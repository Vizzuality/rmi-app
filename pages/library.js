import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// actions
import { getCompanies } from 'modules/companies/companies-actions';
import { getDocuments } from 'modules/documents/documents-actions';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import LibraryPageComponent from 'components/pages/library';

class LibraryPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    // gets documents
    await context.store.dispatch(getDocuments({ include: ['company', 'mine-sites'].join(',') }));

    // gets companies
    await context.store.dispatch(getCompanies({ sort: 'name' }));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Documents Library"
        description="Welcome to RMI | Documents Library"
      >
        <LibraryPageComponent />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(LibraryPage);
