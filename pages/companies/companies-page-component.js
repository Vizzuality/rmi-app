import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import Companies from 'components/pages/companies';

// actions
import { getCompanies, getCompany } from 'modules/companies/companies-actions';
import { getCountries } from 'modules/countries/countries-actions';
import { getCommodities } from 'modules/commodities/commodities-actions';

class CompaniesPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    if (context.query.company) {
      await context.store.dispatch(getCompany({
        companyId: context.query.company,
        queryParams: {
          include: ['mine-sites'].join(',')
        }
      }));
    } else {
      await context.store.dispatch(getCompanies({
        include: ['mine-sites', 'mine-sites.country'].join(',')
      }));

      await context.store.dispatch(getCommodities({
        'fields[commodities]': ['name'].join(',')
      }));
    }

    await context.store.dispatch(getCountries({
      include: ['producing-companies', 'companies'].join(','),
      'fields[countries]': ['name', 'code', 'producing-companies', 'companies'].join(',')
    }));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Companies"
        description="Welcome to RMI | Companies"
      >
        <Companies />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(CompaniesPage);
