import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

// components
import CompaniesListItem from './companies-list-item';

// constants
import { COMPANIES_PER_ROW } from './companies-list-constants';

// styles
import styles from './companies-list-styles.scss';

class CompaniesList extends PureComponent {
  static propTypes = { companies: PropTypes.array.isRequired }

  static renderCompaniesRow(companies, key) {
    return (
      <Fragment key={key} >
        <style jsx>{styles}</style>
        <div className="row -equal-height">
          {companies.map(_company => (
            <div key={_company.id} className="col-md-4">
              <CompaniesListItem key={_company.id} company={_company} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }

  renderCompanies() {
    const { companies } = this.props;
    const totalRows = (companies.length / COMPANIES_PER_ROW) > parseInt(companies.length / COMPANIES_PER_ROW, 10) ?
      parseInt(companies.length / COMPANIES_PER_ROW, 10) + 1 : parseInt(companies.length / COMPANIES_PER_ROW, 10);
    const slides = [];

    for (let i = 0; i < totalRows; i++) {
      const limit = ((i * COMPANIES_PER_ROW) + COMPANIES_PER_ROW);
      const slicedcompanies = companies.slice(i * COMPANIES_PER_ROW, limit);
      slides.push(CompaniesList.renderCompaniesRow(slicedcompanies, i));
    }

    return slides;
  }

  render() {
    const companies = this.renderCompanies();

    return (
      <div className="c-companies-list">
        <style jsx>{styles}</style>
        <div className="content">
          {companies}
        </div>
      </div>
    );
  }
}

export default CompaniesList;
