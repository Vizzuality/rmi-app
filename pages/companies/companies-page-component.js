import React from 'react';
import PropTypes from 'prop-types';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import Companies from 'components/pages/companies';
import CompaniesDetail from 'components/pages/companies-detail';

// actions
import { getCompanies, getCompany, getCompaniesScores } from 'modules/companies/companies-actions';
import { getCountries } from 'modules/countries/countries-actions';
import { getCountriesWithCompanies } from 'components/pages/companies/companies-filters/companies-filters-actions';
import { getCommodities } from 'modules/commodities/commodities-actions';
import { getIndicators } from 'modules/indicators/indicators-actions';
import { getSubsidiaries } from 'modules/subsidiaries/subsidiaries-actions';

class CompaniesPage extends Page {
  static propTypes = { companyId: PropTypes.string }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    const state = context.store.getState();

    if (context.query.company) {
      // gets company info and relationships

      await context.store.dispatch(getCompany({
        companyId: context.query.company,
        queryParams: {
          include: ['country', 'secondary-country', 'producing-countries', 'mine-sites', 'mine-sites.country',
            'mine-sites.commodities', 'mine-sites.scores', 'scores', 'shareholders', 'subsidiaries',
            'beneficial-owners', 'company-country-tax-jurisdictions', 'company-country-tax-jurisdictions.country',
            'investment-disputes', 'fatality-reports', 'selected-mine-sites'
          ].join(','),
          'page[size]': 9999
        }
      }));

      // get all companies scores
      await context.store.dispatch(getCompaniesScores({
        'filter[kind]': ['overall_measurement_commitment', 'overall_measurement_action', 'overall_measurement_effectiveness'].join(','),
        'page[size]': 1000
      }));

      // gets indicators
      await context.store.dispatch(getIndicators({ 'page[size]': 1000 }));

      // gets subsidiaries
      await context.store.dispatch(getSubsidiaries({
        'filter[company]': context.query.company,
        sort: 'name',
        include: 'country'
      }));
    } else {
      await context.store.dispatch(getCompanies({
        include: ['country', 'secondary-country', 'mine-sites', 'mine-sites.country', 'mine-sites.commodities', 'selected-mine-sites'].join(','),
        sort: 'name'
      }));
      await context.store.dispatch(getCommodities({
        'fields[commodities]': ['name'].join(','),
        'filter[used]': true,
        sort: 'name'
      }));

      // populates country filter
      await context.store.dispatch(getCountriesWithCompanies({
        'fields[countries]': ['name', 'code'].join(','),
        'page[size]': 1000,
        'filter[hasCompanies]': true
      }));
    }


    if (context.isServer || (!context.isServer && !state.countries.list.length)) {
      await context.store.dispatch(getCountries({
        include: ['producing-companies', 'companies', 'secondary-companies'].join(','),
        sort: 'name',
        'fields[countries]': ['name', 'code', 'producing-companies', 'companies', 'secondary-companies'].join(','),
        'page[size]': 1000
      }));
    }

    return { ...props };
  }

  render() {
    const { companyId } = this.props;

    return (
      <Layout
        title="Companies"
        description="Welcome to RMI | Companies"
      >
        {companyId ?
          <CompaniesDetail /> : <Companies />}
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  state => ({ companyId: state.routes.query.company }),
  {}
)(CompaniesPage);
