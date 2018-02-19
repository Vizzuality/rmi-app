import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './companies-detail-header-styles.scss';

class CompaniesDetailSidebar extends PureComponent {
  static propTypes = { company: PropTypes.array.isRequired }

  render() {
    const { company } = this.props;
    const { name } = company[0] || {};

    return (
      <div className="c-companies-detail-header">
        <style jsx>{styles}</style>
        <div className="row">
          <div className="col-md-6">
            {name}
          </div>
          <div className="col-md-6" />
        </div>
      </div>
    );
  }
}

export default CompaniesDetailSidebar;
