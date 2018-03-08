import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import MineSitePageComponent from 'components/pages/mine-sites';
import MineSiteDetailPageComponent from 'components/pages/mine-sites-detail';

// actions
import { getCompanies } from 'modules/companies/companies-actions';
import { getCountries } from 'modules/countries/countries-actions';
import { getMineSite } from 'modules/mine-sites/mine-sites-actions';
import { getIndicators } from 'modules/indicators/indicators-actions';
import { getDocuments } from 'modules/documents/documents-actions';

class MineSitesPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    if (context.query.mineSite) {
      // gets mine site info and relationships
      await context.store.dispatch(getMineSite({
        mineSiteId: context.query.mineSite,
        queryParams: {
          include: ['company', 'company.country', 'country',
            'documents', 'commodities', 'scores', 'scores.indicator',
            'document-mine-sites.indicators', 'document-mine-sites.document'].join(',')
        }
      }));

      // gets indicators
      await context.store.dispatch(getIndicators({ 'page[size]': 1000 }));

      // gets documents
      // await context.store.dispatch(getDocuments({ 'filter[mine-site]': context.query.mineSite }));
    } else {
      await context.store.dispatch(getCompanies({ include: ['mine-sites', 'mine-sites.country', 'mine-sites.commodities'].join(',') }));

      await context.store.dispatch(getCountries({
        include: ['producing-companies', 'companies'].join(','),
        'fields[countries]': ['name', 'code', 'producing-companies', 'companies'].join(','),
        'page[size]': 1000
      }));
    }

    return { ...props };
  }

  render() {
    const { mineSite } = this.props.url.query;

    return (
      <Layout
        title="Mine sites"
        description="Welcome to RMI | Mine sites"
      >
        {mineSite ?
          <MineSiteDetailPageComponent /> : <MineSitePageComponent />}
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  () => ({}),
  {}
)(MineSitesPage);
