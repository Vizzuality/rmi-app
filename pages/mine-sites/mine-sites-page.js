import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import MineSitePageComponent from 'components/pages/mine-sites';

// actions
import { getCompanies } from 'modules/companies/companies-actions';
import { getCountries } from 'modules/countries/countries-actions';

class MineSitesPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    if (context.query.company) {
      // gets company info and relationships
      // await context.store.dispatch(getCompany({
      //   companyId: context.query.company,
      //   queryParams: {
      //     include: ['country', 'mine-sites', 'mine-sites.country', 'mine-sites.commodities', 'mine-sites.scores',
      //       'scores', 'shareholders', 'subsidiaries', 'beneficial-owners', 'company-country-tax-jurisdictions',
      //       'company-country-tax-jurisdictions.country', 'investment-disputes', 'fatality-reports'
      //     ].join(','),
      //     'page[size]': 9999
      //   }
      // }));

      // get all companies scores
      // await context.store.dispatch(getCompaniesScores({
      //   'filter[kind]': ['overall_measurement_commitment', 'overall_measurement_action', 'overall_measurement_effectiveness'].join(','),
      //   'page[size]': 1000
      // }));

      // gets indicators
      // await context.store.dispatch(getIndicators({ 'page[size]': 1000 }));
    } else {
      await context.store.dispatch(getCompanies({ include: ['mine-sites', 'mine-sites.country', 'mine-sites.commodities'].join(',') }));
      // await context.store.dispatch(getCommodities({ 'fields[commodities]': ['name'].join(',') }));
    }

    await context.store.dispatch(getCountries({
      include: ['producing-companies', 'companies'].join(','),
      'fields[countries]': ['name', 'code', 'producing-companies', 'companies'].join(','),
      'page[size]': 1000
    }));

    return { ...props };
  }

  render() {
    return (
      <Layout
        title="Mine sites"
        description="Welcome to RMI | Mine sites"
      >
        <MineSitePageComponent />
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(MineSitesPage);
