import React from 'react';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import MineSitePageComponent from 'components/pages/mine-sites';
import MineSiteDetailPageComponent from 'components/pages/mine-sites-detail';
import ErrorPage from 'pages/_error';

// actions
import { getCompanies } from 'modules/companies/companies-actions';
import { getCountries } from 'modules/countries/countries-actions';
import { getMineSite, getMineSites } from 'modules/mine-sites/mine-sites-actions';
import { getIndicators } from 'modules/indicators/indicators-actions';
import { getDocumentMineSites } from 'modules/document-mine-sites/document-mine-sites-actions';

class MineSitesPage extends Page {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    if (context.query.mineSite) {
      // gets mine site info and relationships
      context.store.dispatch(getMineSite({
        mineSiteId: context.query.mineSite,
        queryParams: {
          include: ['company', 'company.country', 'country',
            'documents', 'commodities', 'scores', 'scores.indicator', 'scores.indicator.parent',
            'document-mine-sites.indicators', 'document-mine-sites.document'].join(',')
        }
      }));

      // gets indicators
      await context.store.dispatch(getIndicators({ 'page[size]': 1000 }));

      // gets documents
      await context.store.dispatch(getDocumentMineSites({
        'filter[mine-site]': context.query.mineSite,
        include: ['indicators', 'document'].join(',')
      }));
    } else {
      await context.store.dispatch(getCompanies({
        include: ['selected-mine-sites', 'selected-mine-sites.country', 'selected-mine-sites.commodities'].join(','),
        sort: 'name'
      }));

      await context.store.dispatch(getCountries({
        include: ['producing-companies', 'companies', 'secondary-companies'].join(','),
        'fields[countries]': ['name', 'code', 'producing-companies', 'companies', 'secondary-companies'].join(','),
        'page[size]': 1000
      }));

      await context.store.dispatch(getMineSites({
        sort: 'name',
        'page[size]': 1000
      }));
    }

    return { ...props };
  }

  render() {
    const { currentMineSite, mineSiteError, mineSiteId } = this.props;
    const { mineSite } = this.props.url.query;
    const {
      'selected-for-mine-site-indicators': allowedMineSite,
      name
    } = currentMineSite;

    if ((mineSite && !allowedMineSite) || mineSiteError) return (<ErrorPage />);

    const customTitle = !mineSiteId ? 'Mine Sites' :
      `${name} - Mine site report`;

    return (
      <Layout
        title={customTitle}
        description="Welcome to RMI | Mine sites"
      >
        {mineSite && allowedMineSite && <MineSiteDetailPageComponent />}
        {!mineSite && <MineSitePageComponent />}
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  state => ({
    currentMineSite: (state.mineSites.list[0] || {}),
    mineSiteError: state.mineSites.error,
    mineSiteId: state.routes.query.mineSite
  }),
  null
)(MineSitesPage);
