import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import CompaniesListItem from './companies-list-item';

// styles
import styles from './companies-list-styles.scss';

class CompaniesList extends PureComponent {
  static propTypes = {
    companies: PropTypes.array.isRequired
  }

  render() {
    const { companies } = this.props;
    return (
      <div className="c-companies-list">
        <style jsx>{styles}</style>
        <ul>
          {companies.map(company => <CompaniesListItem key={company.id} company={company} />)}
        </ul>
      </div>
    );
  }
}

export default CompaniesList;
