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
import { getCommodities } from 'modules/commodities/commodities-actions';

class CompaniesPage extends Page {
  static propTypes = { companyId: PropTypes.string }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    if (context.query.company) {
      await context.store.dispatch(getCompany({
        companyId: context.query.company,
        queryParams: {
          include: ['mine-sites', 'mine-sites.scores', 'scores', 'shareholders',
            'subsidiaries', 'beneficial-owners', 'company-country-tax-jurisdictions',
            'company-country-tax-jurisdictions.country', 'investment-disputes'
          ].join(','),
          'page[size]': 9999
        }
      }));

      await context.store.dispatch(getCompaniesScores({
        'filter[kind]': ['overall_measurement_commitment', 'overall_measurement_action', 'overall_measurement_effectiveness'].join(','),
        'page[size]': 1000
      }));
    } else {
      await context.store.dispatch(getCompanies({ include: ['mine-sites', 'mine-sites.country'].join(',') }));
      await context.store.dispatch(getCommodities({ 'fields[commodities]': ['name'].join(',') }));
    }

    await context.store.dispatch(getCountries({
      include: ['producing-companies', 'companies'].join(','),
      'fields[countries]': ['name', 'code', 'producing-companies', 'companies'].join(','),
      'page[size]': 1000
    }));

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
